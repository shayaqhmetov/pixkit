import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetsDir = `${__dirname}/../assets`;
const distAssetsDir = `${__dirname}/../dist/assets`;

if (!existsSync(assetsDir)) {
  process.exit(0);
}

mkdirSync(distAssetsDir, { recursive: true });

cpSync(assetsDir, distAssetsDir, { recursive: true });
