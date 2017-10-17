import Link from 'next/link'
import Layout from '../src/components/layout'

const styles = {
  h: 'relative sans-serif lh-title fw3',
  hSection: 'relative f3 sans-serif',
  hSup: 'f7 absolute top-1 right ml1',
  sup: 'red no-underline pl1',
  anchor: 'red no-underline bb',
  cite: 'fr f5 mt1',
  list: 'pl3',
  moj: 'dib mr1'
}

export default () =>
  <Layout>
      <h1 className={styles.h}>Samuel Breed <a className={styles.anchor} href="#footnote-01"><sup className={styles.hSup}>1</sup></a></h1>
      <h2 className={styles.h}>Product Engineer <a className={styles.anchor} href="#footnote-02"><sup className={styles.hSup}>2</sup></a></h2>

      <section>
        <h1 className={styles.hSection}>Contact Information:</h1>
        <p>
          <a className={styles.anchor} href="mailto:samuel.breed@gmail.com">samuel.breed@gmail.com</a><br/>
          <code className={`f7`}>
            PGP <a className={styles.anchor} href="/pub-gpg.txt">ABBA D805 24B9 16F5 41C2  01E9 360C F6C4 7EC8 89D8</a>
          </code>
        </p>
      </section>

      <section>
        <h1 className={styles.hSection}>Work Experience:</h1>
        <ol className={styles.list}>
          <li>
            <h2 className={styles.hSection}>
              <a className={styles.anchor} href="https://www.creditkarma.com">Credit Karma</a>
            </h2>

            <ul className={styles.list}>
              <li>
                Staff Engineer<sup><a className={styles.sup} href="#footnote-03">3</a></sup>
                <cite className={styles.cite}>2015—present</cite>
              </li>
            </ul>

            <p>In the fall of 2015 I joined Credit Karma as the technical lead for the front-end web team. Under my direction, the front-end teams have created web applications for more than 70 million members.</p>

            <p className={`i f5`}>Notable Accomplishments (with accompanying emoji):</p>

            <ul className={`f5 list pl0`}>
              <li>2017
                <ul className={`${styles.list} mv2`}>
                  <li><span className={styles.moj}>💳</span> Credit Cards team tech lead</li>
                  <li><span className={styles.moj}>🖼</span> Launch Node.js server side rendering platform</li>
                </ul>
              </li>
              <li>2016
                <ul className={`${styles.list} mv2`}>
                  <li><span className={styles.moj}>🚀</span> Re-brand and site-wite redesign launch </li>
                  <li><span className={styles.moj}>📦</span> Create on-demand CDN deploy pipeline</li>
                  <li><span className={styles.moj}>🇨🇦</span> Credit Karma Canada launch</li>
                  <li><span className={styles.moj}>📲</span> Mobile Web launch</li>
                </ul>
              </li>
              <li>2015
                <ul className={`${styles.list} mv2`}>
                  <li><span className={styles.moj}>🚀</span> Launch Credit Karma's first server rendered React app</li>
                  <li><span className={styles.moj}>🤔</span> Adopt private npm and a modular front end architecture</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <h2 className={styles.hSection}>
              <a className={styles.anchor} href="http://quickleft.com/">Quick Left</a>
            </h2>
            
            <ul className={styles.list}>
              <li>Co-founder <cite className={styles.cite}>2009—2015</cite></li>
              <li>Lead Developer <cite className={styles.cite}>2011—2014</cite></li>
              <li>General Manager, Product <cite className={styles.cite}>2014—2015</cite></li>
            </ul>
            <p>In 2009 I co-founded the Boulder, Colo. software consultancy Quick Left. Over the next 6 years, I led the business in various roles as we grew from a modest 2-person operation to a team of more than 40 spanning four offices. We specialized in building products, solving deep technical challenges and worked with companies ranging from small startups to the top of the Fortune 500.<sup><a className={styles.sup} href="#footnote-04">4</a></sup></p>

            <p>After departing in 2015<sup><a className={styles.sup} href="#footnote-05">5</a></sup>, I remained on the Board of Directors to see through the 2016 sale to the global consulting firm Cognizant.</p>
          </li>
        </ol>
      </section>

      <section className={`lh-copy`}>
        <h1 className={styles.hSection}>Education:</h1>
        <ul>
          <li>
            BFA Film Production (incomplete)<sup><a className={styles.sup} href="#footnote-06">6</a></sup><br/>
            <i>Univeristy of Colorado, Boulder 2004—2007</i>
          </li>
        </ul>
      </section>

      <section>
        <h1 className={styles.hSection}>
          See also: <a className={styles.anchor} href="#footnote-07"><sup className={styles.hSup}>7</sup></a>
        </h1>
        <ul>
          <li>Favorite emoji: 🙈 <sup><a className={styles.sup} href="#footnote-08">8</a></sup></li>
          <li><a className={styles.anchor} href="https://frontendmasters.com/courses/backbone-js-in-depth-testing-mocha-sinon/">Frontend Masters</a></li>
          <li><a className={styles.anchor} href="https://www.youtube.com/watch?v=QqSHrpro02g">Backbone Conf 2014</a></li>
          <li><a className={styles.anchor} href="https://www.youtube.com/watch?v=nMVXumwItcw">Hapi Day Oakland 2014</a></li>
          <li><a className={styles.anchor} href="https://www.youtube.com/watch?v=Lm05e5sJaE8">Backbone Conf 2013</a></li>
          <li><a className={styles.anchor} href="https://www.youtube.com/watch?v=W5ti8cl3nzs">jQuery Conf 2013</a></li>
          <li><a className={styles.anchor} href="https://www.youtube.com/watch?v=Lm05e5sJaE8">Backbone Conf 2012</a></li>
          <li><a className={styles.anchor} href="https://obliquestrategies.website/">obliquestrategies.website</a> + <a className={styles.anchor} href="https://chrome.google.com/webstore/detail/oblique-strategies-tab/mgmdhihgmkhangpfokjdhfhjaiadpopd">Chrome Plugin</a> + <a className={styles.anchor} href="https://twitter.com/ObliqueBot/status/886236405118062592">Twitter bot</a></li>
        </ul>
      </section>

      <section className={`pb4 mw-7 lh-copy`}>
        <h1 className={styles.hSection}>Footnotes:</h1>

        <ol className={`${styles.list} f6`}>
          <li id="footnote-01">
            Hello and welcome to my résumé! Let's get to know each other a little before we get things started. My name is Samuel Breed and I made this website, which is fitting because it's about me. I live north of San Francisco. I started riding motorctyles in <b>2014</b>. My current daily rider is a <a className={styles.anchor} href="/static/img/ktm_690.jpg">KTM Enduro 690</a>. It's fast and loud, which I enjoy.
          </li>

          <li id="footnote-02">
            Sounds good, right?
          </li>

          <li id="footnote-03">
            Hey, a second job title already! Okay, so "Staff Engineer" means that I'm responsible for broad areas of tech at Credit Karma, which presently means I oversee what we do for web. So if you get to it with a web browser, my team has something to do with that. Watch out, a whole buncha more titles are coming at you before it's all said and done.
          </li>

          <li id="footnote-04">
            We're dope and we make dope shit.
          </li>

          <li id="footnote-05">
            In 2008 I was the backstock manager of an American Apparel store, which means I counted and folded about 30,000 t-shirts. I had been doing occasional gig work in the Colorado film industry, which means a dozen or so student films, a handful of commercials, and most notably the shoot that produced <a className={styles.anchor} href="/static/img/aaah.gif">this animated gif</a>. I ended up making a wordpress site for a small company I was working for and got paid for it. That's how I started freelancing. A year later I met Colin and a few months after that, Ingrid, and we started Quick Left. We ran a frantic pace for several years and I learned everything I know on that job, by the seat of my pants.
          </li>

          <li id="footnote-06">
            So. "I dropped out of film school" has become something I'll inevitably include as part of my biography, and it always sounds like a cliche the moment I say it. But, that's the most succint way of putting it. To properly frame things: it was 2007, and I wasn't a great filmmaker, but I didn't know that yet. I was only taking film classes (alternating between watching movies and working with cameras and computers) and english lit, and I wasn't exactly flourishing. Either way, in 2007 the financing keeping me in school evaporated and I dropped out and worked to pay off what I owed the school instead of taking out student loans. I don't regret it because it was an formative moment that thrust me out of perpetual adolensence and led to the events outlined in <sup>4</sup>.
          </li>

          <li id="footnote-07">
            This seems like good spot for pseudo-relevant padding so I chose to include it.
          </li>

          <li id="footnote-08">
            Yes I'm for real with the custom cursor.
          </li>
        </ol>
      </section>
      <style jsx>{`
      section {
        margin-top: 7rem;
      }
      `}</style>
  </Layout>