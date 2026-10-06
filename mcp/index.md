# Framegrove MCP, CLI and skill

Install only this product. No parent website repository is required. Node.js 20+ and unzip are needed.

```sh
curl -fL https://framegrove.bamstudio.dev/downloads/framegrove-mcp.zip -o framegrove-mcp.zip
unzip framegrove-mcp.zip
cd framegrove-mcp/mcp
npm ci
npm run fonts
claude mcp add framegrove -- node "$PWD/server.mjs"
```

Cursor or another MCP client: command `node`, argument the absolute path to `mcp/server.mjs`. In Codex, add a local stdio MCP server pointing to the same file; use your client's current MCP setup instructions.

## Tools

- `list_templates`: current curated templates, collections, orientation and output IDs.
- `list_outputs`: dimensions, device families, screenshot slots and format constraints.
- `render_screenshots`: render PNGs from a template, real screenshot paths and captions by language. Defaults to template output sizes.
- `build_project`: produce an editable `.sms.json` bundle for the web editor.
- `inspect_assets`: inspect exported dimensions and PNG alpha channels against a chosen preset.

Caption format: `Headline [highlight] | Subtitle`. Brackets mark emphasis. Use a literal newline for a title line break. `captions` maps language codes to caption arrays. `shots` can be an array or family mapping. For Duo use `iphone-duo-inner` and `iphone-duo-outer`.

```sh
node cli.mjs templates
node cli.mjs render --template duo-paper-inner --shots ./inner-screens --out ./duo-inner
node cli.mjs render --template creative-paper-header --shots ./screens --out ./header
node cli.mjs project --template duo-paper-inner --shots ./inner-screens --out ./editable.sms.json
```

The renderer does not take simulator screenshots itself; the calling agent supplies real captures. It does not upload assets to App Store Connect. Optional AI use in the web editor is independent of the MCP renderer.

## Reusable skill

[Skill instructions](https://framegrove.bamstudio.dev/skills/framegrove/SKILL.md) · [Skill ZIP](https://framegrove.bamstudio.dev/downloads/framegrove-skill.zip). The skill guides composition, truthful captions, correct display slots, inspection and delivery. It is separate from the renderer. Extract its `framegrove` folder into your client's skill directory, for example `~/.codex/skills/` or your project's `.claude/skills/`. Do not overwrite an existing skill without reviewing it.

Source: https://github.com/tech-bam/framegrove
