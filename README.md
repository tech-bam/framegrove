# Framegrove

**App Store, Google Play and iPhone Duo screenshot generator.** A free, local-first web editor plus an MCP server and CLI that let your coding agent render store screenshots and Apple Creative Assets from your real app screenshots.

[![CI](https://github.com/tech-bam/framegrove/actions/workflows/ci.yml/badge.svg)](https://github.com/tech-bam/framegrove/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/framegrove)](https://www.npmjs.com/package/framegrove)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

**Live editor:** https://framegrove.bamstudio.dev

![Framegrove editor and launch collection](docs/framegrove-live.png)

- 56 curated templates and 172 editable compositions: phone, tablet, iPhone Duo and Apple Creative Assets (Header, Search, Universal).
- Exact-size exports; Apple PNGs are RGB with no alpha channel.
- Captions in 34 languages; the website in eight.
- One engine for the web editor, MCP server and CLI. Projects stay on your machine.
- Free, MIT licensed, no signup or watermark.

## Use it from your agent (MCP)

Requires Node.js 20+.

```sh
claude mcp add framegrove -- npx -y framegrove mcp
```

Other clients (Claude Desktop, Cursor, Windsurf, VS Code):

```json
{
  "mcpServers": {
    "framegrove": { "command": "npx", "args": ["-y", "framegrove", "mcp"] }
  }
}
```

Codex: `codex mcp add framegrove -- npx -y framegrove mcp`

Then ask: *"Take six screenshots of my app in the simulator and make App Store screenshots in English and German with Framegrove."*

| Tool | What it does |
| --- | --- |
| `list_templates` | Templates with theme, orientation, default sizes and screen count |
| `list_outputs` | Exact dimensions for App Store, Google Play, iPhone Duo and Creative Assets |
| `render_screenshots` | Render PNGs from a template, screenshot paths and captions per language |
| `build_project` | Write an editable `.sms.json` to fine-tune in the web editor |
| `inspect_assets` | Check exported dimensions and PNG alpha against an output preset |

### Claude Code plugin

Installs the MCP server together with the Framegrove agent skill, which guides truthful captions, matching display slots and visual review:

```sh
claude plugin marketplace add tech-bam/framegrove
claude plugin install framegrove@framegrove
```

The skill alone lives in [`skills/framegrove/`](skills/framegrove/SKILL.md).

## CLI

```sh
npx framegrove templates
npx framegrove outputs
npx framegrove render --template studio-paper --name "My App" --shots ./screens --lines en.txt --captions-de de.txt --out ./store
npx framegrove render --template creative-paper-header --shots ./screens --out ./header
npx framegrove inspect ./store/*.png --output iphone-6.9
npx framegrove project --template duo-paper-inner --shots ./inner --out ./editable.sms.json
npx framegrove --help
```

Caption files have one line per screen: `Headline [highlight] | Subtitle`. Template fonts (Google Fonts, OFL) download once on the first render to `~/.cache/framegrove/fonts`; set `FRAMEGROVE_FONTS` to change the folder or `FRAMEGROVE_OFFLINE=1` to skip it.

Framegrove does not capture simulator screenshots or upload to App Store Connect. Preview Creative Assets in App Store Connect for device-specific cropping. Apple says iPhone Duo uploads open later in 2026; check availability before submitting.

## Repository layout

| Path | Contents |
| --- | --- |
| `engine/` | Canvas rendering engine and templates, shared by every surface |
| `app/` | Web editor |
| `mcp/` | npm package `framegrove`: MCP server, CLI and Node renderer |
| `skills/framegrove/` | Agent skill |
| `.claude-plugin/` | Claude Code plugin and marketplace manifests |
| `server.json` | MCP Registry entry `io.github.tech-bam/framegrove` |
| `locales/` | Website and editor translations |
| `scripts/` | Site build and verification |

## Development

```sh
cd mcp && npm ci && cd ..
npm test                   # renders every template, checks MCP tools and exports
python3 scripts/build.py   # builds the site into public/
python3 -m http.server 8766 --bind 127.0.0.1 --directory public
```

See [CONTRIBUTING.md](CONTRIBUTING.md). Releases: bump the version in `mcp/package.json`, `server.json` and `.claude-plugin/plugin.json`, update [CHANGELOG.md](CHANGELOG.md), then publish a GitHub release; the publish workflow releases to npm and the MCP Registry.

The live site is deployed by the maintainers to Cloudflare Workers (`npx wrangler deploy`, config not in the repository). The legacy product route redirects to Framegrove; the old editor stays on its original origin so local projects can still be exported and imported here.

## Support

Framegrove is free. If it saves you time: https://buymeacoffee.com/bamstudio

Machine-readable docs: https://framegrove.bamstudio.dev/llms.txt
