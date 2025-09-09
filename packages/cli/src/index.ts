#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import prompts from 'prompts';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
async function run() {
    const { framework, name } = await prompts([
        {
            type: 'select', name: 'framework', message: 'Framework?', choices: [
                { title: 'React (web)', value: 'react' },
                { title: 'React Native', value: 'native' }
            ]
        },
        { type: 'text', name: 'name', message: 'Component name', initial: 'button' }
    ]);
    if (!framework || !name) return;
    const src = path.join(__dirname, '../templates', framework, name);
    const dest = path.join(process.cwd(), 'src', 'components', 'pix', name);
    await fs.mkdir(dest, { recursive: true });
    const files = await fs.readdir(src);
    for (const f of files) {
        await fs.copyFile(path.join(src, f), path.join(dest, f));
    }
    console.log(` Added ${name} to ${dest}`);
}
run();
