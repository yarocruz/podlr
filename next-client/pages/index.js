import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ podcasts }) {
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.grid}>
          {podcasts.map(podcast => (
              <a key={podcast.id} href={podcast.link} className={styles.card}>
                <img src={podcast.image} alt="podcast logo and branding"/>
                <h3>{podcast.title}</h3>
                <p>{podcast.description}</p>
              </a>
          ))}


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Run by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/api/podcast/')
  const podcasts = await res.json()

  return {
    props: {
      podcasts
    }
  }
}
