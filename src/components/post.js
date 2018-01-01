import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import Layout from './layout'


const styles = {
  anchor: 'dark-gray link bb',
  h1: 'sans-serif lh-title fw3'
}

export default (props) =>
  <Layout title={props.title} description={props.description}>
    <header>
      <h1 className={styles.h1}>
        <Link href="/"><a className={styles.anchor}>Samuel Breed</a></Link> made this website.
      </h1>
    </header>

    <center>∴</center>

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
