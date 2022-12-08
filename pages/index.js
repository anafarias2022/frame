import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto Final</title>
      </Head>
      <h1>Sejam Bem Vindos </h1>
      <h1>temos tudo que você deseja!!</h1>
      <a href='\produtos'>Conheça nossos produtos</a>
      
    </div>
    
  )
}


