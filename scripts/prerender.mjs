import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../dist-ssr/entry-server.js';

const path = new URL('../dist/index.html', import.meta.url);
const template = await readFile(path, 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error('Missing root placeholder');
const content = render();
if (!content.includes('<h1>')) throw new Error('Missing prerendered heading');
await writeFile(path, template.replace(placeholder, `<div id="root">${content}</div>`));
console.log('Landing prerendered: content and links available without JavaScript.');
