import Layout from '../src/components/layout'
import Link from 'next/link'
import styles from '../src/styles'
import Header from '../src/components/header'
import '../src/sentry'

const Index = () => {
  return (
    <Layout>
      <Header />
      <div className={`measure`}>

      <p>
        Hello 👋
      </p>

      <p>
        I'm <a className={styles.anchor} rel="me" href="https://mastodon.social/@sambreed" title="Follow me on Mastodon!">@sambreed</a>. If you're here for my <Link className={styles.anchor} href="/cv.html"><a className={styles.anchor}>résumé</a></Link>, have at it.
      </p>

      <p>
        I help make websites faster, products better, and teams smarter.
      </p>

      <p>When I'm not doing that, I'm usually trail running somewhere around Mt Tam. I also collect records, enjoy riding motorcycles, and building thing in my woodshop.</p>

      <section>
        <h2>Writing</h2>
        <ul style={{ listStyleType: 'circle' }}>
          <li><Link href="/writing/links-august-2022.html"><a className={styles.anchor}>Links, August 2022</a></Link></li>
          <li><Link href="/writing/twitter.html"><a className={styles.anchor}>So I'm thinking about getting off Twitter</a></Link></li>
          <li><Link href="/writing/links-part-one.html"><a className={styles.anchor}>Links, continued</a></Link></li>
          <li><Link href="/writing/16-open-tabs.html"><a className={styles.anchor}>I have 16 open tabs right now</a></Link></li>
          <li><Link href="/writing/books.html"><a className={styles.anchor}>Bookshelf</a></Link></li>
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
        <h2>Ephemera</h2>
        <ul style={{ listStyleType: 'decimal-leading-zero' }}>
          <li className={``}>
            <Link href="/cv.html"><a className={styles.anchor}>Peruse my C.V.</a></Link>
          </li>
          <li className={``}>
            social media presences: <a className={styles.anchor} href="https://mastodon.social/@sambreed">mastodon</a>, <a className={styles.anchor} href="https://twitter.com/sambreed">twitter</a>, <a className={styles.anchor} href="https://instagram.com/wookiehangover">instagram</a>
          </li>
          <li className={``}>
            code, etc: <a className={styles.anchor} href="https://github.com/wookiehangover?tab=repositories">github</a>
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
                <a className={styles.anchor} href="https://chrome.google.com/webstore/detail/%CA%8D-wikipedia/icfadkjhpjekoifngfldhkkjakifokln">ʍ-wikipedia</a> chrome extension
              </li>
            </ul>
          </li>
        </ul>
        <p>Or if none of that is enough (word, really?) or you have some other unanswered questions, <a className={styles.anchor} href="mailto:sam@destroy.email">send me an email</a> or use one of the links below.</p>
      </section>
      </div>
    </Layout>
  )
};

export default Index;
