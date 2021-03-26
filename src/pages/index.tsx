import Head from 'next/head';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>inicio | ignews</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Oi, bem vindo</span>
          <h1>Novas notícias sobre o mundo <span>React</span></h1>
          <p>Tenha acesso a todas as publicações<br/>
          <span>por $9,90 mês</span></p>
        </section>

        <img  src="/images/avatar.svg" alt="garota codificando"/>
      </main>
    </>
  )
}
  