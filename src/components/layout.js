import Head from './head'

const styles = {
  anchor: 'dark-red link bb hover-red',
  moj: 'dib mr2',
  link: 'db mv3'
}


export default (props) =>
  <div className={`times ma2 ma6-ns measure darkgray`}>
    <Head {...props} />

    <main className={`lh-copy f4 pb2`}>
      {props.children}
    </main>

    <footer className={`bt pt4 b--green`}>
      <small>
        <i><a className={styles.anchor} rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">creative commons</a> &times; open source</i>, so be kind rewind
      </small>
      <nav>
        <div className={styles.link}>
          <span className={styles.moj}>&#x1F4D6;</span>
          <a className={styles.anchor} href="https://twitter.com/sambreed" title="Follow me on Twitter">Sign my guestbook</a>
        </div>
        <div className={styles.link}>
          <span className={styles.moj}>&#x1F621;</span>
          <a className={styles.anchor} href="https://github.com/wookiehangover/wookiehangover.com/issues/new" title="Complaints">Complaints</a>
        </div>
        <div className={styles.link}>
          <span className={styles.moj}>&#x1F481;&#x1F3FB;</span>
          <a className={styles.anchor} href="mailto:sam@destroy.email" title="Send me an Email">Suggestions</a>
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
    }
    body:after {
      content: '';
      z-index: -1;

      background-color: #FFDEE9;
      background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
      
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
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