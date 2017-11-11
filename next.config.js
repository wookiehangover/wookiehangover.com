const path = require('path')

module.exports = {
  webpack(config, { dev }) {
    config.module.rules.push({
      test: /\.html.js$/,
      include: path.join(__dirname, 'pages/writing'),
      loader: './src/post-loader'
    })

    config.node = {
      Buffer: false
    }

    /*
    if (dev) {
      return config
    }

    config.resolve.alias = {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      'preact-compat': 'preact-compat/dist/preact-compat'
    }
    */

    return config
  },
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/cv.html": { page: "/cv.html" },
      "/writing/2016-reading-list.html": { page: "/writing/2016-reading-list.html" },
      "/writing/2017-reading-list.html": { page: "/writing/2017-reading-list.html" },
      "/writing/lessons-from-the-jerk.html": { page: "/writing/lessons-from-the-jerk.html" },
      "/writing/making-things-for-fun.html": { page: "/writing/making-things-for-fun.html" },
      "/writing/picking-up-the-pieces.html": { page: "/writing/picking-up-the-pieces.html" },
      "/writing/protect-your-history.html": { page: "/writing/protect-your-history.html" },
      "/writing/tragic-design-is.html": { page: "/writing/tragic-design-is.html" },
      "/writing/what-I-read-in-2016.html": { page: "/writing/what-I-read-in-2016.html" },
      "/writing/static-sites-with-next-js.html": { page: "/writing/static-sites-with-next-js.html" },
      "/writing/2007.html": { page: "/writing/2007.html" },
    }
  },
}

