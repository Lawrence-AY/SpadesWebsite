import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceRoot = fileURLToPath(new URL('../', import.meta.url));
const root = process.argv.includes('--dist') ? join(sourceRoot, 'dist') : sourceRoot;
const publicRoot = process.argv.includes('--dist') ? root : join(root, 'public');
const port = Number(process.env.PORT || 5173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const requested = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  if (requested.split('/').some((part) => part.startsWith('.'))) {
    response.writeHead(404).end('Not found');
    return;
  }

  const filePath = requested === 'index.html' ? join(root, 'index.html')
    : requested === 'styles.css' ? join(root, 'styles.css')
      : normalize(join(publicRoot, requested));
  if (filePath !== root && !filePath.startsWith(publicRoot + sep) && !['index.html', 'styles.css'].includes(requested)) {
    response.writeHead(404).end('Not found');
    return;
  }

  try {
    const details = await stat(filePath);
    if (details.isFile()) {
      const body = await readFile(filePath);
      response.writeHead(200, {
        'Content-Type': types[extname(filePath).toLowerCase()] || 'application/octet-stream',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'no-cache',
      });
      response.end(body);
      return;
    }
  } catch {
    // App routes intentionally fall back to the shared HTML entry point.
  }

  if (extname(requested)) {
    response.writeHead(404).end('Not found');
    return;
  }

  response.writeHead(200, { 'Content-Type': types['.html'], 'Cache-Control': 'no-cache' });
  response.end(await readFile(join(root, 'index.html')));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Spades Atlas is running at http://localhost:${port}`);
});
