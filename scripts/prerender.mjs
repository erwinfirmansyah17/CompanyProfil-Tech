import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'

// Render Vue at build time so the public landing page has content without JavaScript.
process.env.NODE_ENV = 'production'
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { render } = await server.ssrLoadModule('/src/entry-server.ts')
  const html = await readFile('dist/index.html', 'utf8')
  await writeFile(
    'dist/index.html',
    html.replace('<div id="app"></div>', `<div id="app">${await render()}</div>`),
  )
  console.log('Prerender complete: dist/index.html')
} finally {
  await server.close()
}
