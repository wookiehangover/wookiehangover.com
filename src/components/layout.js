import Head from './head'
import Link from 'next/link'

const styles = {
  anchor: 'dark-gray link bb hover-red',
  moj: 'dib mr2',
  link: 'link bb hover-red'
}

export default (props) =>
  <div className={`times ma2 ma6-ns measure dark-gray`} {...props}>
    <Head {...props} />

    <main className={`lh-copy f4 pb2`}>
      {props.children}
    </main>

    <footer className="code measure mt5 bg-light-pink pv4 ph5 br1 shadow-5">
      <center className="white b f3"><Link href="/"><a>∴</a></Link></center>
      <p className="tc mv4 lh-copy">
        <a className={styles.anchor} rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">creative commons</a> &times; <a className={styles.anchor} title="View the source code of this website on Github" href="https://github.com/wookiehangover/wookiehangover.com">open source</a>, <br/> so be kind rewind
      </p>
      <nav className={`flex justify-around`}>
        <div>
          <a className={styles.anchor} href="https://twitter.com/sambreed" title="Follow me on Twitter">guestbook</a>
        </div>
        <div>
          <a className={styles.anchor} href="https://github.com/wookiehangover/wookiehangover.com/issues/new" title="Complaints">complaints</a>
        </div>
        <div>
          <a className={styles.anchor} href="mailto:sam@destroy.email" title="Send me an Email">suggestions</a>
        </div>
      </nav>
    </footer>

    <style jsx global>{`
    html, body {
      height: 100%;
      min-height: 100%;
    }
    body {
      cursor: url(/static/img/avatar-sm.png) 10 10, auto;
      -webkit-font-smoothing: antialiased;
    }
    li, p {
      font-feature-settings: "calt","liga","hist","onum","pnum"; 
    }
    a:hover {
      cursor: url(/static/img/avatar-pointer.png) 10 10, auto;
    }
    `}</style>
  </div>