import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import Head from './head'
import Footer from './footer'

export default (props) =>
  <div>
    <Head title={props.title} />

    <main className={cx(`mw7 pa3 pa4-ns center min-vh-100`)}>
      <header>
        <Link href="/">
          Back
        </Link>
        <h1 className="fw2"><Link href="https://wookiehangover.com/">Samuel Breed</Link> made this website.</h1>
      </header>

      <section className={cx(`posts pb4`)}>
        <article className={cx(`f5 mv4`)} id={props.slug}>

          {props.children}

          <footer className="mv2">
            <time>Last updated on <small><code className="pa1 bg-near-white mid-gray">{props.updatedAt}</code></small></time>
            <nav className="mv2 mv0-ns fr-ns">
              <a className="mr1" href="/{props.permalink}">Link</a>
              <a className="mr1" href={`https://github.com/wookiehangover/wookiehangover.com/edit/master/src/${props.path}`}>Edit</a>
              <a className="mr1" href={`https://github.com/wookiehangover/wookiehangover.com/commits/master/src/${props.path}`}>History</a>
            </nav>
          </footer>
        </article>
      </section>
    </main>

    <Footer />
  </div>
