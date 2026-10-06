# Framegrove

A free, local-first App Store Creative Assets and screenshot editor.

Live: https://framegrove.bamstudio.dev

## Web editor

`python3 scripts/build.py` then `python3 -m http.server 8766 --directory public`.

## MCP and CLI

Requires Node.js 20+. From `mcp/`, run `npm ci` and `npm run fonts`.

```sh
claude mcp add framegrove -- node "$PWD/server.mjs"
node cli.mjs templates
node cli.mjs render --template creative-paper-header --shots ./screenshots --out ./output
```

Installable download: https://framegrove.bamstudio.dev/downloads/framegrove-mcp.zip

Projects and screenshots are stored locally. Optional AI calls use your own provider key. Back up projects with Export Project before clearing browser storage.

Creative Assets must be previewed in App Store Connect for device-specific cropping. Header and Universal PNG exports have no alpha channel.

## Support

https://buymeacoffee.com/bamstudio
