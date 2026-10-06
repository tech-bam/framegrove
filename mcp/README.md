# Framegrove

App Store, Google Play and iPhone Duo screenshot generator as an **MCP server** and **CLI**. Give it real app screenshots and captions; it renders exact-size store screenshots and Apple Creative Assets (Header, Search, Universal) from 56 curated templates. Free, MIT, runs locally.

Web editor: https://framegrove.bamstudio.dev · Source: https://github.com/tech-bam/framegrove

## MCP server

Requires Node.js 20+.

**Claude Code**

```sh
claude mcp add framegrove -- npx -y framegrove mcp
```

**Claude Desktop, Cursor, Windsurf, VS Code and other clients**

```json
{
  "mcpServers": {
    "framegrove": { "command": "npx", "args": ["-y", "framegrove", "mcp"] }
  }
}
```

**Codex**

```sh
codex mcp add framegrove -- npx -y framegrove mcp
```

Template fonts (Google Fonts, OFL) download once on the first render to `~/.cache/framegrove/fonts`. Set `FRAMEGROVE_FONTS` to use another folder, or `FRAMEGROVE_OFFLINE=1` to skip the download.

### Tools

| Tool | What it does |
| --- | --- |
| `list_templates` | Curated templates with theme, orientation, default sizes and screen count |
| `list_outputs` | Exact dimensions for App Store, Google Play, iPhone Duo and Creative Assets |
| `render_screenshots` | Render PNGs from a template, screenshot paths and captions per language |
| `build_project` | Write an editable `.sms.json` to fine-tune in the web editor |
| `inspect_assets` | Check exported dimensions and PNG alpha against an output preset |

Example prompt: *"Use Framegrove to make App Store screenshots for my app from ./screens, English and German, studio-midnight template."*

## CLI

```sh
npx framegrove templates
npx framegrove outputs
npx framegrove render --template studio-paper --shots ./screens --lines captions.txt --out ./store
npx framegrove render --template creative-paper-header --shots ./screens --out ./header
npx framegrove inspect ./store/*.png --output iphone-6.9
npx framegrove project --template duo-paper-inner --shots ./inner --out ./editable.sms.json
npx framegrove --help
```

Captions file: one line per screen, `Headline [highlight] | Subtitle`. Add languages with `--captions-de de.txt`. Pick sizes with `--sizes iphone-6.9,ipad-13,android-phone` or `WxH`.

## Notes

- Apple PNG outputs are written as RGB without an alpha channel, at exact dimensions.
- Framegrove does not capture simulator screenshots or upload to App Store Connect; it renders what you give it.
- Preview Creative Assets in App Store Connect for device-specific cropping.

## Agent skill and Claude Code plugin

The repository ships an agent skill and a Claude Code plugin that bundles the skill with this MCP server:

```sh
claude plugin marketplace add tech-bam/framegrove
claude plugin install framegrove@framegrove
```

MIT © Framegrove contributors
