const execa = require('execa')
const path = require('path')
const reactToHast = require('./react-to-hast')

const postTemplate = (props, tree, relativePath = '../..') => (`
import { Component } from 'react'
import Post from '${relativePath}/src/components/post'
import ComponentTree from '${relativePath}/src/components/component-tree'
import components from '${relativePath}/src/components/md-components'

export default function Page(props) {
  const data = ${JSON.stringify(props, null, 2)}
  const body = ${JSON.stringify(tree)}
  return (
    <Post {...data}>
      <ComponentTree {...body} components={components} />
    </Post>
  )
}
`)

const compileMarkdown = (source) => new Promise((resolve, reject) => {
  reactToHast.process(source, (err, hast) => {
    if (err) reject(err)
      else resolve(hast)
  })
})

const renderPost = async (source, resourcePath) => {

  const normalizedPath = path.normalize(resourcePath)
  const normalizedPathChunks = normalizedPath.split('pages')[1].split(path.sep)
  const relativePath = new Array(normalizedPathChunks.length).join('../').slice(0, -1)
  const postHast = await compileMarkdown(source)
  let stats = {}
  try {
    stats = await execa('git', ['log', '-n', '1', '--pretty=format:%ad', '--', resourcePath])
  } catch (e) {}
  const { slug } = postHast.data

  const props = Object.assign({}, postHast.data, {
    path: `pages/writing/${slug}.html.js`,
    permalink: `writing/${slug}`,
    updatedAt: stats.stdout
  })

  return postTemplate(props, postHast.contents, relativePath)
}

module.exports = function(source, map) {
  const done = this.async()

  this.addDependency(path.resolve('./components/post.js'))
  this.addDependency(path.resolve('./components/md-components.js'))
  this.addDependency(path.resolve('./components/component-tree.js'))

  renderPost(source, this.resourcePath)
    .catch(done).then(post => done(null, post))
}
