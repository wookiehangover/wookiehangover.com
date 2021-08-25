import Link from 'next/link'
import styles from '../styles'

export default () =>
  <>
    <header>
      <h1 className={styles.h1}>
        <Link href="/"><a className={'black-50'}>Samuel Breed</a></Link> made a website (this one).
      </h1>
    </header>

    <center>∴</center>
  </>
