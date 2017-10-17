import Layout from '../src/components/layout'
import Link from 'next/link'

const styles = {
  anchor: 'dark-red link bb hover-red',
  h1: 'sans-serif lh-title fw3'
}

export default () => {
  return (
    <Layout>
      <h1 className={styles.h1}><a className={styles.anchor}href="https://wookiehangover.com/">Samuel Breed</a> made this website.</h1>

      <p>
        Howdy! I&apos;m <a className={styles.anchor}href="https://twitter.com/sambreed">@sambreed</a>.
      </p>

      <p>
        I help make websites faster, products better, and teams smarter. And, more specifically, I am trapped inside this website.
      </p>

      <p>
        Here are some things I&apos;ve been thinking about recently:
      </p>

      <section>
        <ol>
          <li><Link href="/writing/2007.html"><a className={styles.anchor}>2007</a></Link></li>
          <li><Link href="/writing/static-sites-with-next-js.html"><a className={styles.anchor}>How to make a static blog with Next.js</a></Link></li>
          <li><Link href="/writing/tragic-design-is.html"><a className={styles.anchor}>Tragic design is...</a></Link></li>
          <li><Link href="/writing/2017-reading-list.html"><a className={styles.anchor}>2017 reading list</a></Link></li>
          <li><Link href="/writing/protect-your-history.html"><a className={styles.anchor}>Protect your browsing history with DNSCrypt</a></Link></li>
          <li><Link href="/writing/what-I-read-in-2016.html"><a className={styles.anchor}>Why I read what I read in 2016</a></Link></li>
          <li><Link href="/writing/lessons-from-the-jerk.html"><a className={styles.anchor}>Lessons from The Jerk</a></Link></li>
          <li><Link href="/writing/picking-up-the-pieces.html"><a className={styles.anchor}>Picking up the pieces; or How I learned to stop worrying and embrace weird metaphors</a></Link></li>
          <li><Link href="/writing/making-things-for-fun.html"><a className={styles.anchor}>Making things for fun</a></Link></li>
          <li><Link href="/writing/2016-reading-list.html"><a className={styles.anchor}>2016 reading list</a></Link></li>
        </ol>
      </section>

      <center>∴</center>

      <section>
        <p>If you dig any of that, then you might also enjoy some of this:</p>
        <nav>
          <div className={``}><Link href="/cv.html"><a className={styles.anchor}>Peruse my C.V.</a></Link></div>
          <div className={``}><a className={styles.anchor}href="https://github.com/wookiehangover?tab=repositories">Check out some of my projects</a></div>
          <div className={``}><a className={styles.anchor}href="https://twitter.com/sambreed">Follow me on Twitter!</a></div>
          <div className={``}><a className={styles.anchor}href="https://obliquestrategies.website/">obliquestrategies.website</a> + <a className={styles.anchor}href="https://chrome.google.com/webstore/detail/oblique-strategies-tab/mgmdhihgmkhangpfokjdhfhjaiadpopd">Chrome Plugin</a> + <a className={styles.anchor}href="https://twitter.com/ObliqueBot/status/886236405118062592">Twitter bot</a></div>
        </nav>
        <p>Or if none of that is enough and you have some questions, drop me a line at <b>sam@destroy.email</b></p>
      </section>
    </Layout>
  )
}
