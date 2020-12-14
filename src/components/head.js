import Head from 'next/head'

const HeadComponent = (
  { title='Samuel Breed', description='Sam Breed is a person who maintains this award-winning website which is sort of like a geocities page' }
) => <Head>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <title>{title} ∴ wookiehangover.com</title>
  <meta name="author" content="Samuel Breed" />
  <meta name="description" content={description} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:title" content={title} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://wookiehangover.com/static/img/john-wayne.jpg" />
  <meta property="og:description" content={description} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>;

export default HeadComponent;
