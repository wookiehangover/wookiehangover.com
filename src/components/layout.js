import Head from './head'

const styles = {
  anchor: 'dark-gray link bb hover-blue',
  moj: 'dib mr2',
  link: 'link bb hover-blue'
}

export default function Layout({ title, description, ...props}) {
  return (
  <div className={`sans-serif ma2 ma6-ns mw7 black-70`} {...props}>
    <Head title={title} description={description} />

    <main className={`lh-copy pb2`}>
      {props.children}
    </main>

    <footer className="code mt5 pv4 ph5 br1 shadow-5">
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
      cursor: url(/img/avatar-sm.png) 10 10, auto;
      -webkit-font-smoothing: antialiased;
    }
    a:hover {
      cursor: url(/img/avatar-pointer.png) 10 10, auto;
    }
    `}</style>
  </div>
  )
}