import { GetServerSideProps } from 'next';
import Head from 'next/head';
import {SubscribeButton} from '../components/SubscribeButton'
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }:HomeProps) {
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
            <span>por {product.amount} mês</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img  src="/images/avatar.svg" alt="garota codificando"/>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1IZdgpGUYOPrFMD2qmBLJimO');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
  }
  
  return {
    props: {
      product
    }
  }
}
  