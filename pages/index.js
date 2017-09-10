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
        </header>

        <p className={cx(`lh-copy`)}>
          Howdy! I&apos;m <a href="https://twitter.com/sambreed" className={cx(`f4`)}>@sambreed</a>.
        </p>

        <p className={cx(`lh-copy`)}>
          <b>I make websites faster, products better, and teams smarter.</b> And more specifically, I am trapped inside this website.
        </p>

        <p className={cx(`lh-copy`)}>
          Here are some things I&apos;ve been thinking about recently:
        </p>

        <section className={cx(`posts`)}>
          <ol>
          <li><Link href="/writing/2007.html"><a>2007</a></Link></li>
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

        <center className={cx(`mv5`)}>∴</center>

        <section>
          <p className={cx(`lh-copy`)}>If you dig any of that, then you might also enjoy some of this:</p>
          <div className={`flex flex-wrap justify-center mv4`}>
            <div className={`ba pa3 ma2`}><Link href="/cv.html"><a>Peruse my C.V.</a></Link></div>
            <div className={`ba pa3 ma2`}><a href="https://github.com/wookiehangover?tab=repositories">Check out some of my projects</a></div>
            <div className={`ba pa3 ma2`}><a href="https://twitter.com/sambreed">Follow me on Twitter!</a></div>
            <div className={`ba pa3 ma2`}><a href="https://obliquestrategies.website/">obliquestrategies.website</a> + <a href="https://chrome.google.com/webstore/detail/oblique-strategies-tab/mgmdhihgmkhangpfokjdhfhjaiadpopd">Chrome Plugin</a> + <a href="https://twitter.com/ObliqueBot/status/886236405118062592">Twitter bot</a></div>
          </div>
          <p className={cx(`lh-copy`)}>Or if none of that is enough and you have some questions, drop me a line at <b>sam@destroy.email</b></p>
        </section>
      </main>

      <Footer />

      <div className={cx(`dust`)}></div>
    </div>
  )
}
