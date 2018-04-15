import Layout from '../src/components/layout'
import Link from 'next/link'

const styles = {
  anchor: 'dark-gray link bb hover-red',
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
        I help make websites faster, products better, and teams smarter.
      </p>

      <p>I collect records and ride motorcycles and make stuff with hand tools and lots of cursing. And, more specifically, I am trapped inside this website. It's now your job to find the clues that I've hidden in my typo-laden and occasionally coherent &ldquo;blog&rdquo; &ldquo;posts&rdquo; to help free my from this cursed mouse cursor. Except if you&apos;re on mobile web.</p>

      <p>Here's <Link href="/writing/books.html"><a className={styles.anchor}>what I've been reading</a></Link> lately. That's a good place to start.</p>

      <p>
        Here's what I&apos;ve been thinking about recently. But don't take my word for it.
      </p>

      <section>
        <ul style={{ listStyleType: 'lower-greek' }}>
          <li><Link href="/writing/2017-reading-list.html"><a className={styles.anchor}>2017 reading list</a></Link></li>
          <li><Link href="/writing/2007.html"><a className={styles.anchor}>What the fuck happened in 2007</a></Link></li>
          <li><Link href="/writing/static-sites-with-next-js.html"><a className={styles.anchor}>How to make a static website with Next.js</a></Link></li>
          <li><Link href="/writing/tragic-design-is.html"><a className={styles.anchor}>Tragic design is...</a></Link></li>
          <li>
            <Link href="/writing/2016-reading-list.html"><a className={styles.anchor}>2016 reading list</a></Link>
            &nbsp;&middot;&nbsp;
            <Link href="/writing/what-I-read-in-2016.html"><a className={styles.anchor}>Why I read what I read in 2016</a></Link>
          </li>
          <li>
            <Link href="/writing/protect-your-history.html"><a className={styles.anchor}>Protect your DNS history with DNSCrypt</a></Link>
            </li>
          <li><Link href="/writing/lessons-from-the-jerk.html"><a className={styles.anchor}>Lessons from The Jerk (1978)</a></Link></li>
          <li><Link href="/writing/picking-up-the-pieces.html"><a className={styles.anchor}>Picking up the pieces; or How I learned to stop worrying and embrace weird metaphors</a></Link></li>
          <li><Link href="/writing/making-things-for-fun.html"><a className={styles.anchor}>Making things for fun</a></Link></li>
          <li><a className={styles.anchor} href="https://medium.com/@sambreed/2015-books-504cb79ac5c0#.f8izs5mpq">2015 reading list</a></li>
        </ul>
      </section>


      <section>
        <p>But there's even more. So much more.</p>
        <ul style={{ listStyleType: 'hebrew' }}>
          <li className={``}>
            <Link href="/cv.html"><a className={styles.anchor}>Peruse my C.V.</a></Link>
          </li>
          <li className={``}>
            internet websites: <a className={styles.anchor} href="https://twitter.com/sambreed">twitter</a>, <a className={styles.anchor} href="https://instagram.com/wookiehangover">instagram</a>
          </li>
          <li className={``}>
            code, etc: <a className={styles.anchor} href="https://github.com/wookiehangover?tab=repositories">github</a>, <a className={styles.anchor} href="https://github.com/sam-breed-ck">wørk</a>
          </li>
          <li className={``}>
            side projects:
            <ul>
              <li><a className={styles.anchor} href="https://twitter.com/pantone_colors">every pantone color</a> twitter bot</li>
              <li>
                <a className={styles.anchor} href="https://obliquestrategies.website/">obliquestrategies.website</a>
                <ul>
                  <li><a className={styles.anchor} href="https://chrome.google.com/webstore/detail/oblique-strategies-tab/mgmdhihgmkhangpfokjdhfhjaiadpopd">chrome extension</a></li>
                  <li><a className={styles.anchor} href="https://twitter.com/ObliqueBot/status/886236405118062592">twitter bot</a></li>
                </ul>
              </li>
              <li>
                <a className={styles.anchor} href="http://stendigcalendar.website/">stendigcalendar.website</a>
              </li>
              <li>
                <a className={styles.anchor} href="https://chrome.google.com/webstore/detail/%CA%8D-wikipedia/icfadkjhpjekoifngfldhkkjakifokln">ʍ-wikipedia</a> chrome extension
              </li>
            </ul>
          </li>
        </ul>
        <p>Or if none of that is enough (word, really?) or you have some other unanswered questions, <a className={styles.anchor} href="mailto:sam@destroy.email">drop me a line via email</a> or use one of the links below.</p>
      </section>
    </Layout>
  )
}
