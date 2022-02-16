import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Radiato</title>
        <meta name="description" content="Продажа радиаторов отопления" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Header />
      <Nav />
      <Results />

      {/* Result */}
    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;

  сonst request = await.fetch(``)
}