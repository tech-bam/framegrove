# iPhone Duo screenshot generator

Prepare separate real screenshots for the outer and inner displays. Choose an inner, outer or inner-landscape template. Match capture orientation to the composition. Device frames are schematic.

## App Store screenshot output sizes

| Display | Portrait | Landscape | Output ID |
| --- | --- | --- | --- |
| Outer | 1398 × 2034 | 2034 × 1398 | iphone-duo-outer |
| Inner | 2007 × 2853 | 2853 × 2007 | iphone-duo-inner |

These are Apple's screenshot upload dimensions, not physical screen resolution. Framegrove exports Duo PNGs as RGB with no alpha channel.

Duo family slots are `iphone-duo-inner` and `iphone-duo-outer`. The global image fallback should only be used if that actual screenshot fits the target display.

## Availability checked 2026-10-06

Apple staff said App Store Connect support for Duo uploads would be available later in 2026. Preparing assets now does not mean a Duo upload slot is already open. Check Apple's current documentation before submission.

Sources: [Apple screenshot specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/) and [Apple DTS answer](https://developer.apple.com/forums/thread/845505).

[Choose Duo templates](https://framegrove.bamstudio.dev/templates/#/duo).
