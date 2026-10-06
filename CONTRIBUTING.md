# Contributing to Framegrove

Useful contributions include template compositions, translation corrections, export bugs and accessibility fixes.

## Run locally

Run `python3 scripts/build.py`, then serve `public/` with a local HTTP server. For rendering tests, run `npm ci` and `npm run fonts` from `mcp/`, then `npm test` from the repository root.

## Template changes

Keep screenshots readable, use real feature claims, and review every screen in a series. Templates belong in `engine/templates/`. Phone, tablet, Duo and Creative Assets need their own compositions. Keep Duo inner and outer screenshot slots separate. Never remove an existing template key: mark it archived so saved projects continue to open.

Run `node scripts/review-templates.mjs` for a visual review of all current templates. The JPEG review sheets go to `/tmp/framegrove-review`. Review long captions and both EN/TR samples. Check RGB PNG exports at the exact target dimensions.

## Translation changes

`locales/site.tsv` contains English, Turkish, German, French, Spanish, Italian, Portuguese and Japanese. `locales/ui.tsv` contains English and the six additional UI languages; Turkish UI strings live in `engine/i18n.js`. Keep the pipe-delimited column count intact. Rebuild after editing; the build checks every landing-page translation.

## Bug reports

Include the browser, template key, output preset and steps to reproduce. A small anonymized project is useful. Do not include API keys, private app screenshots or customer data.

The MIT license permits commercial use. Optional project support: https://buymeacoffee.com/bamstudio
