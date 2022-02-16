import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import styles from '../styles/Home.module.css'

export default function Home({ results }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Radiato</title>
        <meta name="description" content="Продажа радиаторов отопления" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Header />
      <Nav />
      <Results results={results}/>

      {/* Result */}
    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`
  https://www.themoviedb.org/3${request[genre]?.url || 
  request.fetchTrending.url
}`
).then(res => res.json());

return {
  props: {
    results: request.results, 
  }
}
}