#!/usr/bin/env node

'use strict'

const cheerio = require('cheerio')
const async = require('async')
const marked = require('marked')
const fs = require('fs')
const ejs = require('ejs')

const posts = [
  'lessons-from-the-jerk.md',
  'picking-up-the-pieces.md',
  'making-things-for-fun.md',
  '2016-reading-list.md'
]

console.log('Building Markdown \n')
async.map(posts, renderPost, (err, posts) => {
  if (err) throw err

  async.parallel([
    function(done) {
      writeTemplate(posts, 'index.html', (err) => {
        if (!err) console.log('✅  index.html updated')
        done(err)
      })
    },
    function(done) {
      ejs.renderFile('./templates/posts.html', { posts }, (err, data) => {
        fs.writeFile('writing/index.html', data, (err) => {
          if (!err) console.log(`✅  writing/index.html created`)
          done(err)
        })
      })
    }
  ], (err) => {
    if (err) throw err
    console.log('\nMarkdown build complete.')
  })

})

function renderPost(path, done) {
  const filename = `writing/${path}`

  async.parallel({
    stats: done => fs.stat(filename, done),
    post: done => fs.readFile(filename, 'utf8', done)
  }, (err, results) => {
    if (err) return done(err)

    const body      = marked(results.post, { smartypants: true })
    const permalink = filename.replace(/md$/, 'html')
    const slug      = path.replace('.md', '')
    const title     = (results.post.split('\n')[0] || 'Untitled 👻').replace('##', '')
    const updatedAt = results.stats.mtime

    const context = {
      body,
      filename,
      permalink,
      slug,
      title,
      updatedAt
    }

    ejs.renderFile('./templates/post.html', context, (err, data) => {
      fs.writeFile(permalink, data, (err) => {
        done(err, context)
        console.log(`✅  writing/${filename} -> ${permalink}`)
      })
    })
  })
}

function writeTemplate(posts, target, done) {
  async.parallel({
    index: done => fs.readFile('index.html', 'utf8', done),
    template: done => fs.readFile('templates/post_body.html', 'utf8', done)
  }, (err, results) => {
    if (err) return done(err)

    const $ = cheerio.load(results.index)
    const links = posts.map(post => `<li><a href=${post.permalink}>${post.title}</a></li>`).join('\n')
    $('.posts').html(`<ol>${links}</ol>`)

    fs.writeFile(target, $.html(), done)
  })
}
