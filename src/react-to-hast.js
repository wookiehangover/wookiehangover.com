const frontmatter   = require('remark-frontmatter')
const highlight     = require('remark-highlight.js')
const markdown      = require('remark-parse')
const rehypeRaw     = require('rehype-raw')
const rehypeReact   = require('rehype-react')
const remarkRehype  = require('remark-rehype')
const unified       = require('unified')
const visit         = require('unist-util-visit')


module.exports = unified()
  .use(markdown, {
    gfm: true,
    footnotes: true
  })
  .use(frontmatter)
  .use(() => function transformer(tree, file) {
      visit(tree, 'yaml', (node) => {
        const lines = node.value.split('\n')
        Object.assign(file.data, lines.reduce((frontmatter, line) => {
          const [ name, value ] = line.split(':')
          frontmatter[name.trim()] = value.trim()
          return frontmatter
        }, {}))
      })
  })
  .use(highlight)
  .use(remarkRehype, { allowDangerousHTML: true })
  .use(rehypeRaw)
  .use(rehypeReact, {
    createElement: (type, props, children) => ({ type, props, children })
  })
