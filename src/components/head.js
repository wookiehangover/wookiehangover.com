import Head from 'next/head'

export default ({ title='' }) =>
  <Head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <title>{`${title} `}∴ Samuel Breed wookiehangover.com</title>
    <meta name="author" content="Samuel Breed" />
    <meta name="description" content="Sam Breed is a developer person who maintains this website which is sort of like a geocities page" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="Samuel Breed: an internet web page" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://wookiehangover.com/static/img/theodore-rex.jpg" />
    <meta property="og:description" content="Sam Breed is a developer person who maintains this website which is sort of like a geocities page" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/static/style.css" />
  </Head>
