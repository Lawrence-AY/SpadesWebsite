import { cp, mkdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'dist');
await mkdir(output, { recursive: true });
await Promise.all(['index.html', 'app.js', 'styles.css'].map((file) => copyFile(join(root, file), join(output, file))));
await cp(join(root, 'public'), output, { recursive: true, force: true });
console.log('Static site copied to dist/');
