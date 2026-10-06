---
name: framegrove
description: Create coherent App Store and Google Play screenshot campaigns, Apple Header/Search Creative Assets, and iPhone Duo screenshot sets from real app screenshots using the Framegrove MCP server or CLI. Use for store marketing assets, not app UI redesign or preview videos.
---

# Framegrove

Use real app screenshots and confirmed feature notes to create an editable, coherent marketing set. Framegrove's web editor, MCP and CLI share one canvas engine.

## Start with the right surface

Use `list_templates` to inspect the current catalog, including `collection`, `sizes`, orientation and screen count. Pick one visual direction for the campaign. Prefer separate projects for portrait screenshots, Header, Search and Duo; changing an output size does not redesign the composition.

- `studio-*`: six-frame phone stories; `tablet-*`: tablet compositions.
- `creative-*-header`, `creative-*-search`, `creative-*-universal`: dedicated static artwork for Apple's placements. These are not preview videos.
- `duo-*-outer`, `duo-*-inner`, `duo-*-inner-landscape`: three-frame Duo sets. Use real screenshots from the matching display, never a stretched ordinary iPhone screen.

App Store rules change. Check the current Apple specifications if preparing a submission. On 2026-10-06, Apple listed outer Duo screenshots at 1398 × 2034 (or the reverse) and inner at 2007 × 2853 (or the reverse). Apple staff said App Store Connect uploads would open later in the year; do not claim the upload slot is already available.

## Build a story, then render

Make each frame serve a different role: core benefit, useful interaction, distinguishing feature, or a concrete workflow. Use short, accurate headlines and supporting copy. Match screenshots to the feature being described. Avoid invented ratings, awards or unsupported performance claims. Keep the app name consistent across languages.

Call `render_screenshots` with the template, absolute screenshot paths, captions by language and an output directory inside the user's requested workspace. Use `addIcon:false` for Creative Assets and Duo when an automatic icon would conflict with the composition. The optional rating field is only for verified ratings.

For Duo, provide separate screenshot families: `shots:{"iphone-duo-inner":[…]}` or `shots:{"iphone-duo-outer":[…]}`. A `global` fallback is useful only when the supplied screenshot actually fits that display. Portrait and inner-landscape screenshots need matching capture orientation.

Captions use `Headline [highlight] | Subtitle`; brackets mark emphasis. A literal newline separates headline lines. The output defaults to the selected template's sizes. To override sizes, use IDs returned by the catalog or `list_outputs`.

If MCP is unavailable, the standalone package supports:

```sh
node mcp/cli.mjs templates
node mcp/cli.mjs render --template duo-paper-inner --name "My App" --shots ./inner-screens --out ./output
node mcp/cli.mjs project --template duo-paper-inner --shots ./inner-screens --out ./editable.sms.json
```

Install from https://framegrove.bamstudio.dev/mcp/ or the dedicated repository https://github.com/tech-bam/framegrove. Do not clone a parent website repository. The skill itself does not include the renderer or install dependencies.

## Review the actual result

Inspect every exported frame and at least the longest caption in each language. Check text clipping, contrast, screenshot fit, focal-point cropping and repeated claims. Header, Universal and Duo PNGs should be RGB without an alpha channel; verify exact exported dimensions. Inspect both inner and outer Duo sets separately. Device frames are schematic; they do not prove the app supports the hardware.

Correct demonstrated issues and rerender the affected frames. Use `build_project` to deliver an editable `.sms.json` project alongside the PNGs. Import it at https://framegrove.bamstudio.dev/app/#/projects. Deliver a concise gallery and state what was rendered, which languages and sizes were checked, and any submission availability constraint.
