#!/usr/bin/env node
/* Store Mockup MCP sunucusu (stdio). Araçlar:
   - list_templates        : şablonlar + etiketler
   - render_screenshots    : şablon + metin + ss dosyaları → PNG'ler (App Store / Play boyutları)
   - build_project         : tarayıcı uygulamasına içe aktarılacak .sms.json
   Kurulum: claude mcp add store-mockup -- node /path/to/mcp/server.mjs */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import fs from 'node:fs';
import path from 'node:path';
import { listTemplates, renderSet, buildBundle } from './render-node.mjs';

const server = new McpServer({ name: 'framegrove', version: '1.0.0' });

const SpecShape = {
  template: z.string().describe('Template key from list_templates (e.g. studio-paper, studio-midnight, creative-paper-header, creative-lime-search).'),
  name: z.string().describe('App name. Optional icon on screenshot templates; Creative Assets preserve their dedicated layout.'),
  lang: z.string().default('en').describe('Default caption language code (en, tr, de, …).'),
  lines: z.array(z.string()).optional().describe('Captions in the default language, one per screen: "Headline [highlight] | Subtitle". Headline ≤30 chars, subtitle ≤55; wrap ONE benefit word in [brackets]; \\n for a line break.'),
  captions: z.record(z.array(z.string())).optional().describe('Captions per language: {"en":[…],"tr":[…]}. Same order and count for every language. Overrides `lines` for that language.'),
  shots: z.union([z.array(z.string()), z.record(z.array(z.string()))]).default([]).describe('Screenshot file paths in screen order — an array (used for every device) or per family: {"global":[…],"iphone":[…],"ipad":[…],"android-phone":[…]}.'),
  icon: z.string().optional().describe('App icon file path (square PNG).'),
  accent: z.string().optional().describe('Brand accent hex (#16a34a). Omit to keep the template colour.'),
  rating: z.string().optional().describe('Rating badge text for screen 1, e.g. "4.8 · 1.2K ratings". Only if real.'),
  addIcon: z.boolean().default(true).describe('Draw icon + app name on screen 1.'),
  frame: z.string().optional().describe('Device frame override: iphone-pro | iphone-notch | android | tablet | none.'),
};

server.tool(
  'list_templates',
  'List the screenshot templates (key, name, description, tags, slide count). Pick by the app category and desired theme (acik=light, koyu=dark, renkli=colourful).',
  {},
  async () => ({ content: [{ type: 'text', text: JSON.stringify(listTemplates(), null, 1) }] })
);

server.tool(
  'render_screenshots',
  'Render a complete App Store / Google Play screenshot set as PNG files from a template, captions and screenshot files. Output is organised as language / size / screen. Sizes are output ids from devices (iphone-6.9, iphone-6.5, ipad-13, android-phone, android-tablet-10, watch, macos …) or "WxH".',
  {
    ...SpecShape,
    sizes: z.array(z.string()).optional().describe('Output ids or "WxH". Each size gets its own subfolder when more than one.'),
    exportLanguages: z.array(z.string()).optional().describe('Languages to export (default: all languages present in captions).'),
    outDir: z.string().default('./store-screenshots').describe('Output directory.'),
  },
  async (spec) => {
    const all = [...(Array.isArray(spec.shots) ? spec.shots : Object.values(spec.shots || {}).flat()), spec.icon].filter(Boolean);
    for (const p of all) if (!fs.existsSync(p)) return { isError: true, content: [{ type: 'text', text: `file not found: ${p}` }] };
    const r = await renderSet(spec);
    return { content: [{ type: 'text', text: `${r.files.length} PNG written (${r.screens} screens × ${r.languages.length} languages × ${r.sizes.length} sizes, template ${r.template}) → ${r.outDir}\n` + r.files.slice(0, 40).map((f) => path.relative(process.cwd(), f)).join('\n') + (r.files.length > 40 ? '\n…' : '') }] };
  }
);

server.tool(
  'build_project',
  'Write a project file (.sms.json) that can be imported into the Framegrove web app (Projects → Import project) for visual fine-tuning in the browser. Use when the user wants to edit in the editor instead of final PNGs.',
  { ...SpecShape, out: z.string().default('./store-mockup.sms.json').describe('Output .json path.') },
  async (spec) => {
    const b = await buildBundle(spec);
    fs.writeFileSync(spec.out, JSON.stringify(b));
    return { content: [{ type: 'text', text: `project written: ${path.resolve(spec.out)} (${b.project.screens.length} screens, ${Object.keys(b.assets).length} assets). Import it at https://framegrove.bamstudio.dev/app/#/projects` }] };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
