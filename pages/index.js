import cx from 'classnames'
import Head from '../src/components/head'
import Link from 'next/link'
import Footer from '../src/components/footer'

export default () => {
  return (
    <div>
      <Head />
      <main className={cx(`mw7 pa3 pa4-ns center min-vh-100`)}>
        <header>
          <h1 className="fw2"><a href="https://wookiehangover.com/">Samuel Breed</a> made this website.</h1>
          <h2 className={cx(`light-blue fw2 rainbows tl sans-serif mv4`)}>
            I am working on <span className="strike">an open source, decentralized cryptocurrency exchange that pools fees into a distributed, ICO-backed payout model.</span> Coming soon.
          </h2>
        </header>

        <p className={cx(`lh-copy`)}>
          Howdy! I&apos;m <a href="https://twitter.com/sambreed" className={cx(`f4`)}>@sambreed</a>. I make user experiences, software, and questionable decisions on the internet. More specifically, I am this website.
        </p>

        <p className={cx(`lh-copy`)}>
          Here are some things I&apos;ve been thinking about recently:
        </p>

        <section className={cx(`posts`)}>
          <ol>
          <li><Link href="/writing/static-sites-with-next-js.html"><a>How to make a static blog with Next.js 3</a></Link></li>
          <li><Link href="/writing/tragic-design-is.html"><a>Tragic Design is...</a></Link></li>
          <li><Link href="/writing/2017-reading-list.html"><a>2017 Reading List</a></Link></li>
          <li><Link href="/writing/protect-your-history.html"><a>Protect Your Browsing History with DNSCrypt</a></Link></li>
          <li><Link href="/writing/what-I-read-in-2016.html"><a>Why I Read What I Read in 2016</a></Link></li>
          <li><Link href="/writing/lessons-from-the-jerk.html"><a>Lessons from The Jerk</a></Link></li>
          <li><Link href="/writing/picking-up-the-pieces.html"><a>Picking up the pieces; or How I learned to stop worrying and embrace weird metaphors</a></Link></li>
          <li><Link href="/writing/making-things-for-fun.html"><a>Making things for fun</a></Link></li>
          <li><Link href="/writing/2016-reading-list.html"><a>2016 Reading List</a></Link></li>
          </ol>
        </section>

        <section className={cx(`mv2`)}>
          <p className={cx(`mv4 lh-copy`)}>If you dig any of that, then you might also enjoy:</p>
          <ul>
            <li><Link href="/cv.html">Perusing my C.V.</Link></li>
            <li><a href="https://obliquestrategies.website/">Oblique Strategies website</a> and <a href="https://chrome.google.com/webstore/detail/oblique-strategies-tab/mgmdhihgmkhangpfokjdhfhjaiadpopd">Chrome Plugin</a> and <a href="https://twitter.com/ObliqueBot/status/886236405118062592">Twitter bot</a></li>
            <li><a href="https://github.com/wookiehangover?tab=repositories">Checking out some of my projects</a> (including the very <a href="https://github.com/wookiehangover/wookiehangover.com">web page you&apos;re reading right now</a>!)</li>
            <li><a href="https://twitter.com/sambreed">Following me on Twitter!</a></li>
          </ul>
          <p className={cx(`mv4 lh-copy`)}>Or if none of that is enough and you have some questions, drop me a line at <b>samuel.breed@gmail.com</b></p>
        </section>
      </main>

      <Footer />

      <div className={cx(`dust`)}></div>
    </div>
  )
}