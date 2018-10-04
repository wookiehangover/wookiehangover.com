import Link from 'next/link'
import Layout from '../src/components/layout'

const styles = {
  h: 'relative lh-title code fw3',
  hSection: 'relative f5 code fw3',
  hSup: 'f7 absolute top-1 right ml1',
  sup: 'red no-underline pl1',
  anchor: 'dark-gray no-underline bb',
  cite: 'dib ml3',
  list: 'pl3',
  moj: ''
}

const Fn = (props) =>
  <sup>
    <a href={`#footnote-${props.children}`} className={`${styles.anchor} relative`} style={{ left: '0.0625em' }}>
      [{props.children}]
  </a>
  </sup>

const Contact = () =>
  <div className={`mv3`}>
    <a className={styles.anchor} href="mailto:samuel.breed@gmail.com">samuel.breed@gmail.com</a>
    <br/>
    <span className={`pa1 mt1 dib bg-near-white f7`}> PGP <a className={styles.anchor} href="/pub-gpg.txt">ABBA D805 24B9 16F5 41C2 01E9 360C F6C4 7EC8 89D8</a></span>
  </div>

const Resume = () => (
  <div className={`f6 lh-copy`}>
    <div className={`mw6`}>
      <h1>Samuel Breed<Fn>1</Fn></h1>
      <p>Web Developer<Fn>2</Fn></p>

      <Contact />

      <h2>Work Experience:</h2>
      <ol>
        <li>
          <a className={styles.anchor} href="https://www.creditkarma.com">Credit Karma</a>

          <ul className="mv3">
            <li>
              Senior Staff Engineer
              <cite className={styles.cite}>2018—present</cite>
            </li>
            <li>
              Staff Engineer<Fn>3</Fn>
              <cite className={styles.cite}>2015—2018</cite>
            </li>
          </ul>

          <p>In the fall of 2015 I joined Credit Karma as the technical lead for the front-end web team. Under my direction, the front-end teams have created web applications for more than 70 million members.</p>

          <h3>Notable Accomplishments (with accompanying emoji):</h3>

          <ul>
            <li>2018
              <ul>
                <li><span className={styles.moj}>🐒</span> Launch serverless web app platform</li>
              </ul>
            </li>
            <li>2017
                <ul>
                <li><span className={styles.moj}>🛠</span> Started the Front End Infrastructure team</li>
                <li><span className={styles.moj}>🖼</span> Launch Node.js server side rendering platform</li>
                <li><span className={styles.moj}>💳</span> Credit Cards team tech lead</li>
              </ul>
            </li>
            <li>2016
                <ul>
                <li><span className={styles.moj}>🚀</span> Re-brand and site-wide redesign launch </li>
                <li><span className={styles.moj}>📦</span> Create on-demand CDN deploy pipeline</li>
                <li><span className={styles.moj}>🇨🇦</span> Credit Karma Canada launch</li>
                <li><span className={styles.moj}>📲</span> Mobile Web rewrite & launch</li>
              </ul>
            </li>
            <li>2015
                <ul>
                <li><span className={styles.moj}>🚀</span> Launch Credit Karma's first server rendered React app</li>
                <li><span className={styles.moj}>🤔</span> Establish private npm and a modular front end architecture</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mt4">
          <a className={styles.anchor} href="https://quickleft.com/">Quick Left</a>

          <ul className="mv2">
            <li>Co-founder <cite className={styles.cite}>2009—15</cite></li>
            <li>Lead Developer <cite className={styles.cite}>2011—14</cite></li>
            <li>General Manager, Product <cite className={styles.cite}>2014—15</cite></li>
          </ul>

          <p>In 2009 I co-founded the Boulder, Colo. software consultancy Quick Left. Over the next 6 years, I led the business in various roles as we grew from a modest 2-person operation to a team of more than 40 spanning four offices. We specialized in building products, solving deep technical challenges and worked with companies ranging from small startups to the top of the Fortune 500.<Fn>4</Fn></p>

          <p>After departing in 2015<Fn>5</Fn>, I remained on the Board of Directors to see through the 2016 sale to the global consulting firm Cognizant.</p>
        </li>
      </ol>

      <h2>Education:</h2>
      <ul>
        <li>
          BFA Film Production (incomplete)<Fn>6</Fn><br />
          <i>Univeristy of Colorado, Boulder 2004—2007</i>
        </li>
      </ul>

      <h2>
        See also <Fn>7</Fn>
      </h2>
      <ul>
        <li>Favorite emoji: 🙈 <Fn>8</Fn></li>
        <li><a className={styles.anchor} href="https://frontendmasters.com/courses/backbone-js-in-depth-testing-mocha-sinon/">Frontend Masters</a></li>
        <li><a className={styles.anchor} href="https://www.youtube.com/watch?v=QqSHrpro02g">Backbone Conf 2014</a></li>
        <li><a className={styles.anchor} href="https://www.youtube.com/watch?v=nMVXumwItcw">Hapi Day Oakland 2014</a></li>
        <li><a className={styles.anchor} href="https://www.youtube.com/watch?v=Lm05e5sJaE8">Backbone Conf 2013</a></li>
        <li><a className={styles.anchor} href="https://www.youtube.com/watch?v=W5ti8cl3nzs">jQuery Conf 2013</a></li>
        <li><a className={styles.anchor} href="https://www.youtube.com/watch?v=Lm05e5sJaE8">Backbone Conf 2012</a></li>
        <li><a className={styles.anchor} href="https://obliquestrategies.website/">obliquestrategies.website</a> + <a className={styles.anchor} href="https://goo.gl/Z9w7Rb">Chrome Plugin</a> + <a className={styles.anchor} href="https://twitter.com/ObliqueBot">Twitter bot</a>
        </li>
      </ul>
    </div>

    <footer className={`f7 mw8`}>
      <h3>Footnotes:</h3>

      <ol>
        <li id="footnote-1">
          Hello and welcome to my résumé! Let's get to know each other a little before we get things started. My name is Samuel Breed and I made this website, which is fitting because it's about me. I live north of San Francisco. I started riding motorctyles in <b>2014</b>. My current daily rider is a <a className={styles.anchor} href="/static/img/ktm_690.jpg">KTM Enduro 690</a>. It's fast and loud, which I enjoy.
          </li>

        <li id="footnote-2">
          Sounds good, right?
          </li>

        <li id="footnote-3">
          Hey, a second job title already! Okay, so "Staff Engineer" means that I'm responsible for broad areas of tech at Credit Karma, which presently means I oversee what we do for web. So if you get to it with a web browser, my team has something to do with that. Watch out, a whole buncha more titles are coming at you before it's all said and done.
          </li>

        <li id="footnote-4">
          We're dope and we make dope shit.
          </li>

        <li id="footnote-5">
          In 2008 I was the backstock manager of an American Apparel store, which means I counted and folded about 30,000 t-shirts. I had been doing occasional gig work in the Colorado film industry, which means a dozen or so student films, a handful of commercials, and most notably the shoot that produced <a className={styles.anchor} href="/static/img/aaah.gif">this animated gif</a>. I ended up making a wordpress site for a small company I was working for and got paid for it. That's how I started freelancing. A year later I met Colin and a few months after that, Ingrid, and we started Quick Left. We ran a frantic pace for several years and I learned everything I know on that job, by the seat of my pants.
          </li>

        <li id="footnote-6">
          So. "I dropped out of film school" has become something I'll inevitably include as part of my biography, and it always sounds like a cliche the moment I say it. But, that's the most succint way of putting it. To properly frame things: it was 2007, and I wasn't a great filmmaker, but I didn't know that yet. I was only taking film classes (alternating between watching movies and working with cameras and computers) and english lit, and I wasn't exactly flourishing. Either way, in 2007 the financing keeping me in school evaporated and I dropped out and worked to pay off what I owed the school instead of taking out student loans. I don't regret it because it was an formative moment that thrust me out of perpetual adolensence and led to the events outlined in <sup>4</sup>.
          </li>

        <li id="footnote-7">
          This seems like good spot for pseudo-relevant padding so I chose to include it.
          </li>

        <li id="footnote-8">
          Yes I'm for real with the custom cursor.
        </li>
      </ol>
    </footer>

    <style jsx>{`
    h1, h2, h3, h4 {
      font-weight: normal;
      font-size: 1em;
      margin: 1em 0;
    }

    ol h3 {
      display: inline-block;
    }

    h1::before { content: '# '; }
    h2::before { content: '## '; }
    h3::before { content: '### '; }
    h4::before { content: '#### '; }
    p::before  { content: '> '; }

    ul > li::before { content: '* '; display: inline; }

    ol > li { counter-increment: step-counter; }

    ol > li::before { content: counter(step-counter)'. '; display: inline; }

    ul, ol {
      list-style: none;
      padding: 0;
    }

    li > ul {
      padding-left: 2ex;
    }

    a::before, a::after  {
      font-size: 0.8rem;
      color: #999;
    }

    a:hover::before, a:hover::after {
      color: turquoise;
    }

    a::before { content: '['; }
    a::after  { content: ']('attr(href)')'; }

      `}</style>
    </div>)

export default () => (
  <Layout className={`code ma6-ns ma2`}>
    <Resume />
  </Layout>
)
