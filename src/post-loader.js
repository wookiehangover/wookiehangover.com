const execa = require('execa')
const unified      = require('unified')
const markdown     = require('remark-parse')
const rehypeRaw    = require('rehype-raw')
const rehypeReact  = require('rehype-react')
const remarkRehype = require('remark-rehype')
const remarkFrontmatter = require('remark-frontmatter')
const visit = require('unist-util-visit')

const reactHast = unified()
  .use(markdown, {
    gfm: true,
    footnotes: true
  })
  .use(remarkFrontmatter)
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
  .use(remarkRehype, { allowDangerousHTML: true })
  .use(rehypeRaw)
  .use(rehypeReact, {
    createElement: (type, props, children) => ({ type, props, children })
  })

const postTemplate = (props, tree) => (`
import { Component } from 'react'
import Post from '../../src/components/post'
import ComponentTree from '../../src/components/component-tree'
import components from '../../src/components/md-components'

export default (props) => {
  const data = ${JSON.stringify(props, null, 2)}
  const body = ${JSON.stringify(tree)}
  return (
    <Post {...data}>
      <ComponentTree {...body} components={components} />
    </Post>
  )
}
`)

module.exports = function(source, map) {
  const done = this.async()

  execa('git', ['log', '-n', '1', '--pretty=format:%ad', '--', this.resourcePath])
    .then(stats => {
      reactHast.process(source, (err, postHast) => {
        if (err) {
          return done(err)
        }
        const { title, slug } = postHast.data
        const props = {
          slug,
          permalink: `writing/${slug}`,
          path: `pages/writing/${slug}.js`,
          title,
          updatedAt: stats.stdout
        }
        done(null, postTemplate(props, postHast.contents))
      })
    })
}