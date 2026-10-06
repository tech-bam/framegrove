#!/usr/bin/env node
/* npm prepack/postpack: copy the shared browser engine into the package, then remove the copy. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, '..', 'engine');
const dest = path.join(here, 'engine');
const FILES = ['i18n.js', 'frames.js', 'devices.js', 'render.js', 'model.js', 'tpl-dsl.js', 'png.js', 'templates'];

fs.rmSync(dest, { recursive: true, force: true });
fs.rmSync(path.join(here, 'LICENSE'), { force: true });
if (process.argv[2] !== 'clean') {
  for (const f of FILES) fs.cpSync(path.join(src, f), path.join(dest, f), { recursive: true });
  fs.copyFileSync(path.join(here, '..', 'LICENSE'), path.join(here, 'LICENSE'));
}
