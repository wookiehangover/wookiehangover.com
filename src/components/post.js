import React from 'react'
import cx from 'classnames'
import Layout from './layout'
import styles from '../styles'
import Header from './header'
import '../sentry'

export default (props) =>
  <Layout title={props.title} description={props.description}>
    <Header />

    <section className={cx(`posts`)}>
      <article className={cx(`mv4`)} id={props.slug}>

        {props.children}

        <footer className="code mt4 f6 mid-gray pa1 bg-near-white">
          <time>{props.updatedAt}</time>
          <nav className="mv2 mv0-ns fr-ns">
            <a className={`${styles.anchor} mr1`} href={`/${props.permalink.indexOf('.html') === -1 ? props.permalink + '.html' : props.permalink}`}>Link</a>
            <a className={`${styles.anchor} mr1`} href={`https://github.com/wookiehangover/wookiehangover.com/edit/master/${props.path.replace('.html.html', '.html')}`}>Edit</a>
            <a className={`${styles.anchor} mr1`} href={`https://github.com/wookiehangover/wookiehangover.com/commits/master/${props.path.replace('.html.html', '.html')}`}>History</a>
          </nav>
        </footer>
      </article>
    </section>
  </Layout>
