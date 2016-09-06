#!/usr/bin/env node

'use strict'

const cheerio = require('cheerio')
const async = require('async')
const marked = require('marked')
const fs = require('fs')

const posts = [
  'making-things-for-fun.md',
  '2016-reading-list.md'
]

function postTemplate(context) {
  return `
    <article id="${context.filename.replace('md', '')}">
      ${context.body}
      <footer>
        <time>Last updated on ${context.updatedAt}</time>
        <a href="/${context.permalink}">Link</a>
        <a href="https://github.com/wookiehangover/wookiehangover.com/edit/master/writing/${context.filename}">Edit</a>
      </footer>
    </article>
  `
}

function writeTemplate(template, post, target, done) {
  fs.readFile(template, 'utf8', (err, contents) => {
    if (err) throw err
    const $ = cheerio.load(contents)
    $('.posts').html(post)
    fs.writeFile(target, $.html(), done)
  })
}

function processMarkdown(filename, done) {
  fs.stat(`writing/${filename}`, (err, stats) => {
    if (err) return done(err)

    fs.readFile(`writing/${filename}`, 'utf8', (err, contents) => {
      if (err) return done(err)
      const permalink = `writing/${filename.replace(/md$/, 'html')}`
      const post = postTemplate({
        filename, permalink,
        body: marked(contents),
        updatedAt: stats.mtime
      })
      writeTemplate('post.html', post, permalink, err => done(err, post))
    })
  })
}

async.map(posts, processMarkdown, (err, markdown) => {
  if (err) throw err
  writeTemplate('index.html', markdown.join('\n'), 'index.html', (err) => {

  })
})
