#!/usr/bin/env node

'use strict'

const marked = require('marked')
const cheerio = require('cheerio')
const fs = require('fs-promise')
const ejs = require('ejs')
const pify = require('pify')
const renderTemplate = pify(ejs.renderFile)

const posts = [
  '2017-reading-list.md',
  'protect-your-history.md',
  'what-I-read-in-2016.md',
  'lessons-from-the-jerk.md',
  'picking-up-the-pieces.md',
  'making-things-for-fun.md',
  '2016-reading-list.md'
]

async function preparePost (filename) {
  const path = `src/${filename}`
  const stats = await fs.stat(path)
  const post = await fs.readFile(path, 'utf8')
  const slug = filename.replace('.md', '')
  return {
    slug,
    path,
    body: marked(post, { smartypants: true }),
    permalink: `writing/${slug}.html`,
    title: (post.split('\n')[0] || 'Untitled 👻').replace('##', ''),
    updatedAt: stats.mtime
  }
}

async function processPost (filename) {
  try {
    const postData = await preparePost(filename)
    const html = await renderTemplate('./templates/post.html', postData)
    await fs.writeFile(postData.permalink, html)
    console.log(`  ✅  writing/${filename}\t->\t${postData.permalink}`)
    return postData
  } catch (e) {
    console.error(`\n❌ Error processing ${filename}`)
    console.error(e)
  }
}

async function renderIndex (postData) {
  console.log('\n→ Adding posts to index.html...\n')
  const index = await fs.readFile('index.html', 'utf8')
  const links = postData.map(post => `<li><a href=${post.permalink}>${post.title}</a></li>`).join('\n')
  const $ = cheerio.load(index)
  $('.posts').html(`<ol>${links}</ol>`)
  return fs.writeFile('index.html', $.html())
}

console.log('→ Building markdown from src/...\n')
Promise.all(posts.map(processPost))
  .then(renderIndex)
  .then(() => {
    console.log(`  ✅  index.html -> index.html`)
    console.log('\n💁  All done!')
  })
  .catch((e) => {
    console.error(`\n❌ Error processing ${filename}`)
    throw new Error(e)
  })
