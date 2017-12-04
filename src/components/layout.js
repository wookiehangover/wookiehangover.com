import Head from './head'

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


    <footer className="code measure">
      <center>∴</center>
      <p className="tc mv4">
        <a className={styles.anchor} rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">creative commons</a> &times; <a className={styles.anchor} title="View the source code of this website on Github" href="https://github.com/wookiehangover/wookiehangover.com">open source</a>, so be kind rewind
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
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='Squiggle-svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.st0{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-50%);}}%3C/style%3E%3Cpath fill='none' stroke='%23f00' stroke-width='1' class='st0' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
      background-position: 0 100%;
      background-size: auto 3px;
      background-repeat: repeat-x;
      padding-bottom: 3px;
      border-bottom-color: transparent;
    }
    `}</style>
  </div>