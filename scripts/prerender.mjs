import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { render } from '../dist-ssr/entry-server.js';

const path = new URL('../dist/index.html', import.meta.url);
const template = await readFile(path, 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error('Missing root placeholder');
const content = render();
if (!content.includes('<h1>')) throw new Error('Missing prerendered heading');
await writeFile(path, template.replace(placeholder, `<div id="root">${content}</div>`));
console.log('Landing prerendered: content and links available without JavaScript.');

// Legal documents are static HTML too: readable without JavaScript and on direct entry.
for (const [route, title] of [
  ['terminos-y-condiciones', 'Términos y condiciones'],
  ['politica-de-privacidad', 'Política de privacidad'],
]) {
  const pathname = `/legales/${route}/`;
  let legalTemplate = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title} | Nito Socios</title>`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '')
    .replace(/<meta name="description"[\s\S]*?\/>/, `<meta name="description" content="${title} de Nito Socios. Titular, suscripciones, datos personales y contacto." />`)
    .replace(/<meta (?:property="og:(?:title|description|url)"|name="twitter:(?:title|description)")[\s\S]*?\/>/g, '')
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="https://nitoapp.online${pathname}" />`);
  const document = render(pathname);
  if ((document.match(/<h1>/g) ?? []).length !== 1 || !document.includes('Juan Pablo González') || document.includes('Nito Presupuestos')) throw new Error(`Invalid legal document: ${route}`);
  const directory = new URL(`../dist${pathname}`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), legalTemplate.replace(placeholder, `<div id="root">${document}</div>`));
}
console.log('Legal pages prerendered.');
