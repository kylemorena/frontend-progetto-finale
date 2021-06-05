import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Axios from 'axios'
import {Button} from '@material-ui/core';

export default function Home() {
  const onClick = () => {
    Axios.post('https://kyle-morena-default-rtdb.europe-west1.firebasedatabase.app/', {nome:"kyle", congnome:"prova"})
  }
  return (
    <div className={styles.container}>
      <h1>Welcome to Next.js</h1>
      <Button variant="contained" color="secondary" onClick={onClick}>Click</Button>
    </div>
  )
}