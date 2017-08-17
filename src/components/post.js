import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import Head from './head'
import Footer from './footer'

export default (props) =>
  <div>
    <Head title={props.title} description={props.description} />

    <main className={cx(`mw7 pa3 pa4-ns center min-vh-100`)}>
      <header>
        <Link>
          <a href="/">Back</a>
        </Link>
        <h1 className="fw2">
          <Link><a href="/">Samuel Breed</a></Link> made this website.
        </h1>
      </header>

      <section className={cx(`posts pb4`)}>
        <article className={cx(`f5 mv4`)} id={props.slug}>

          {props.children}

          <footer className="mv2">
            <time>Last updated on <small><code className="pa1 bg-near-white mid-gray">{props.updatedAt}</code></small></time>
            <nav className="mv2 mv0-ns fr-ns">
              <a className="mr1" href={`/${props.permalink.indexOf('.html') === -1 ? props.permalink + '.html' : props.permalink}`}>Link</a>
              <a className="mr1" href={`https://github.com/wookiehangover/wookiehangover.com/edit/master/${props.path.replace('.html.html', '.html')}`}>Edit</a>
              <a className="mr1" href={`https://github.com/wookiehangover/wookiehangover.com/commits/master/${props.path.replace('.html.html', '.html')}`}>History</a>
            </nav>
          </footer>
        </article>
      </section>
    </main>

    <Footer />
  </div>
