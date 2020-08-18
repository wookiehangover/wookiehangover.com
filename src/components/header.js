import Link from 'next/link'
import styles from '../styles'

export default () =>
  <>
    <header>
      <h1 className={styles.h1}>
        <Link href="/"><a className={'black-40 no-underline ttu'}>Samuel Breed</a></Link> is a web developer.
      </h1>
    </header>

    <center>∴</center>
  </>
