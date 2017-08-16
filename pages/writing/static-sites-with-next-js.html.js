---
title: How to Make a Static Blog with Next.js 3
slug: static-sites-with-next-js
description: I recently used Next.js 3 to make a static blog. Learn how I did it!
---

# How to Make a Static Blog with Next.js 3

![make a static next.js blog](/static/img/next-blog-1.gif)

👋  Hey, so I recently finished upgrading this very website. No longer is my corner of  of the internet a  cobbled-together mess of node and of shell scripts. Now it's a fully-fledged modern JavaScript app with [Next.js 3][next]!

I can write and edit posts in Markdown and can even drop in custom HTML if I need to (I mean how else am I gonna incorporate `<marquee>` tags into my writing?). With [Next.js][next], I get all sorts of fancy features. Service worker prefetch, code splitting, and SPA style route changes, all for free. _Here's how I did it._

[If you haven't heard of Next.js it's a pretty cool, live reloading, totally-out-of-your-way tool for building webapps with React. You should use it.](https://zeit.co/blog/next3)

As soon as the Zeit team announced plans to support serverless static exports, I was ready to go. I had already tried out Next.js for a few side projects, but didn't want to worry about running a server (even if it's free and painless) to keep my website up. I even tried scraping a compiled Next.js app with `wget` to make a static site, so Next's official support for static sites had me running out of excuses.

Here were my requirements for this humble website:

* Fully static and deployable on Github pages.
* Author posts in Markdown, with support for HTML things like `<details>` tags.
* _Fast._ Nobody's got time for slow websites.
* Support my CSS preferences: [Tachyons](http://tachyons.io/) and some custom CSS compiled with [postcss](http://postcss.org/)

Next.js seems to have checked off all my boxes, so I dug in and started prototyping.

> "Plan to throw one away; you will, anyhow".

<cite>
— <i>The Mythical Man-Month</i>, Fred Brooks (as popularized in <i>The Cathedral and the Bazaar</i> by Eric Raymond)
</cite>

[I built a prototype on the Next.js 3 beta](https://github.com/wookiehangover/wookie-next) to kick the tires. I learned a few things along the way but didn't end up with a website that was ready to deploy.

Too bad I wasn't very happy with my first pass. I added a necessary-but-clunky build step to convert my old posts to Next's routing model. The plan was to compile my markdown posts and write out files to the `pages/` directory. Next.js would pick them up whenever they changed, but I didn't like having to run two build scripts.

*Next's biggest selling point is having live reloading figured out already!* Having to run more than one script felt wrong, so I abandoned the prototype.

<details class="pa4 ba b--rainbows">
<summary>
  <i>A brief aside re: a nifty markdown rendering pipeline with Unified and Remark that should probably be in it's own post, but laziness.</i>
</summary>

> Every good work of software starts by scratching a developer's personal itch.

<cite>
— <i>The Cathedral and the Bazaar</i>, Eric Raymond
</cite>

### 🐰 Rabbit Hole: React from HTML Markdown

One of the itches I _really_ wanted to scratch was the minor annoyance of having to use `__dangerouslySetInnerHtml` to use most off-the-shelf markdown libraries with React. I even made it a bit harder on myself by lazily abusing markdown and sprikling bits of markup in many of my posts, since most React components that render markdown tend to fall back to to _dangerouslySet_ instead of parsing the markdown to generate a valid React component for the entire markdown document. This isn't a new or unsolved problem, so I did some research and ended up geeking out on text processing and abstract syntax trees. Turns out that there are already a bunch of well documented AST parser/compilers that support markdown on npm!

I really didn't want to make clients do any of the parsing work. Even though parsing markdown can be optimized to be fast in modern browsers, making users download additional JavaScript and spend CPU time to convert posts clientside just didn't sit well with me.

I decided that in order to handle all of my posts with their mix of markdown and html, I would use [Unified][unified] to make a rendering pipeline to go from markdown to HTML to a set of React components. There were already unified plugins for everything I wanted to do!

There was even a [ready-made solution for my exact gripe about `__dangerouslySetInnerHtml`](https://github.com/mapbox/remark-react)! Unfortunately, remark-react handles _most_ cases but didn't want to parse the raw HTMl generously sprinkled throughout my posts. Either way, I had found a small ecosystem of node modules that would make short work of lots of text processing problems. Neat!

Here's what the code ended up looking like:

```js
const unified = require('unified')

unified()
  .use(require('remark-parse'), {
    gfm: true,
    footnotes: true
  })
  .use(require('remark-rehype'), {
    allowDangerousHTML: true
  })
  .use(require('rehype-raw'))
  .use(require('rehype-react'))
```

To my suprise and delight, that process pipeline resulted in a totally usable React component! But it still would require some redundant processing on the client since the React component was being generated dynamicaly from a string of markdown. 

So how do you _cache_ a React component? Like, a whole component, not just the serialization of it's virtual dom. React provides tools to server render components in multiple ways, but you can't easily generate _jsx_ from a dynamically generated components. But there _is_ a techinique for dealing with a React as a compile output of an AST, evidenced by [react-rehype](https://github.com/rhysd/rehype-react) at the end of that Unified markdown pipeline.

React has a dead simple API for creating components without JSX in `React.createElement()`. Since it's just plain JavaScript and doesn't require any functions or non-serializable data structures, it turns out that you can make a JSON structure that represents a set of React components pretty easily. I had run into a use case for this same trick at work, so I put it to use again here: I modified the last step of my Unified pipeline to return JSON instead of a React component. [`rehype-react`](https://github.com/rhysd/rehype-react) made this a cinch, since they allow you to pass a custom method for `createElement`.

```js
remarkPipeline().use(rehypeReact, {
  createElement: (type, props, children) => ({ type, props, children })
})
```

From there, I made a [simple component](https://github.com/wookiehangover/wookiehangover.com/blob/master/src/components/component-tree.js) to transform the result from [`rehype-react`](https://github.com/rhysd/rehype-react) back into a React component:

```jsx
<ComponentTree components={components} />
```

Now I have an pipeline where you can put markdown with crazy embedded HTML in one end, and well-formed _serializable_ React components come out of the other end. With that, I can write out JavaScript files containing valid React components without having to reconstruct any JSX literals from the rehype AST. Either way that's a step that I wanted to be transparent when I was writing posts. Mission accomplished 😎

There are a couple of benefits from going through all that trouble:

* [remark plugins](https://github.com/wooorm/remark/blob/master/doc/plugins.md) can do just about anything. Seriously. I was able to add code highlighting _while I was writing this post_ with 1 npm install, 1 line of JavaScript, and 1 line of CSS!
* Unified's [vfile](https://github.com/vfile/vfile) format makes adding post metadata easy.
* No format lock in. When the wind blows a differnt direction and React falls out of favor, outputting to a different format will be easy.
</details>

## Markdown ➡️ Webpack ➡️ Next.js

I wanted to write in Markdown and have Next.js pick up the changes automatically.

By default, next will use any JavaScript modules that export a React component in your `pages/` directory. While writing markdown next to code is possible, it's gross. Same goes for duplicating the same boilerplate file for each post and importing the markdown source from some other directory. I wanted to skip all that an go straight from Markdown into Next's build and compile pipeline.

💡 The lightbulb moment came when I realized the power of Next's support for custom Webpack configuration.

A  [webpack loader](https://webpack.js.org/concepts/loaders/) can transform markdown source files into modules on the spot! And better yet, I already had a build script from my prototype that was doing most of what I needed to do in the loader. I needed to change was how my build script found out about files (reading them from disk vs. passed in by webpack) and how it output the results (again, writing to disk vs. passing the result back to webpack). The loader plugin interface was dead simple:

```js
module.exports = function(source) {
  const done = this.async()

  renderPost(source, this.resourcePath)
    .catch(done).then(post => done(null, post))
}
```

Where `renderPost(source, resourcePath)` was the middle bit of my prototyped static rendering pipeline, refactored to only need a string of the file content and the path of the file being rendered. This is one of the easiest changes to make, since it took a method formerly reliant on _side effects_, namely reading and writing to disk, and made it a pure function. Any time you can make a method that's passed an input and return a result, you should. Decomposing your assumptions about side effects will almost always save time. I learned this from Gary Bernhardt's talk _[Boundaries](https://www.destroyallsoftware.com/talks/boundaries)_, and I remember it every time I see it.

The last step was to add it to the webpack extension point in `next.config.js`:

```js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.html\.js$/,
      include: './pages/writing',
      loader: './src/post-loader'
    })
    return config
  }
}
```

## Building and Deploying

Unlike in my early prototype, Next.js 3 supports creating a complete static site from any next app with `next export`. To tell it what routes and pages to export, you need to add some configuration to `next.config.js`. Here's what mine looks like:

```js
module.exports = {
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/cv.html": { page: "/cv.html" },
      "/writing/2016-reading-list.html": { page: "/writing/2016-reading-list.html" },
      "/writing/2017-reading-list.html": { page: "/writing/2017-reading-list.html" },
      // ...
    }
  }
}
```

Then I changed my build step to run `next build && next export --docs` and I with surprisingly little drama was ready to deploy to Github pages!

Normally I'd be worried that I'd have missed some minor detail in a major change like swapping out the entire backend of a website, but in essence what I was doing here wasn't all that big of a change: my static HTML, JavaScript, and CSS in the `docs/` directory was still there, but was being built by a different tool chain. I pushed the first commit with the switch to Next.js and waited patiently while the build ran on Travis CI.

...And that was it. I had more or less completely moved my static site into a totally modern React app with Next.js. The whole thing is [open source](), so feel free to kick the tires and ask questions if you have any 😊

Here are the relevant parts of the app:

* **post-loader.js** – [webpack loader](https://github.com/wookiehangover/wookiehangover.com/blob/master/src/post-loader.js)
* **static-sites-with-next-js.html.js** – [a markdown post with embedded HTML](https://github.com/wookiehangover/wookiehangover.com/blob/master/pages/writing/static-sites-with-next-js.html.js)
* **react-to-hast.js** – [markdown compiler with Unified.js](https://github.com/wookiehangover/wookiehangover.com/blob/master/src/react-to-hast.js)
* **component-tree.js** – [React component for rendering JSON AST](https://github.com/wookiehangover/wookiehangover.com/blob/master/src/components/component-tree.js)

### Gotcha's! 😝

A few snags I ran into:

* Github pages still perversely retains some of it's Jekyll roots, and ignores file and directory names that start with an underscore 🙄
  * **Fix:** add `.nojekyll` to your `docs/` directory (or whatever is configured in the "Pages" portion of your repo config in Github)
* The `.html.js` file extension on the posts was because I wanted backwards compatabilty with my static html version, which used plain old html files
  * _Minor annoyance:_ `next export` adds directories for every static file to avoid the .html extension showing up in the path, but now I have urls with trailing slashes.
  * If I ever want to change a URL (like to drop the `.html` extension because it's not 1998), I'll need to figure out how to manage the redirects.
* I need to remember to add new posts to `next.config.js`, which I seem pathologically incapable of. I'll probably make the webpack plugin emit a JSON file with all the post metadata, but I haven't done that yet.

<marquee>And here's that `<marquee>` tag to prove I wasn't joking about supporting arbitraty HTML in posts. And thanks [@ddtrejo](https://twitter.com/ddtrejo) for feedback and edits!</marquee>

[unified]: https://unifiedjs.github.io/
[next]: https://github.com/zeit/next.js