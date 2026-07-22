import { readFile, readdir, writeFile } from 'node:fs/promises'

const projectRoot = new URL('../', import.meta.url)
const distDirectory = new URL('./dist/', projectRoot)
const assetDirectory = new URL('./assets/', distDirectory)
const outputFile = new URL('./lab-homepage-preview.html', projectRoot)

const assetNames = await readdir(assetDirectory)
const cssName = assetNames.find((name) => name.endsWith('.css'))
const scriptName = assetNames.find((name) => name.endsWith('.js'))

if (!cssName || !scriptName) {
  throw new Error('Built CSS or JavaScript asset was not found. Run the production build first.')
}

const [html, css, script] = await Promise.all([
  readFile(new URL('./index.html', distDirectory), 'utf8'),
  readFile(new URL(cssName, assetDirectory), 'utf8'),
  readFile(new URL(scriptName, assetDirectory), 'utf8'),
])

const standaloneHtml = html
  .replace(
    /<script[^>]+src="[^"]+"[^>]*><\/script>/,
    () => `<script type="module">\n${script.replaceAll('</script', '<\\/script')}\n</script>`,
  )
  .replace(
    /<link[^>]+rel="stylesheet"[^>]*>/,
    () => `<style>\n${css.replaceAll('</style', '<\\/style')}\n</style>`,
  )

await writeFile(outputFile, standaloneHtml, 'utf8')
console.log(outputFile.pathname)
