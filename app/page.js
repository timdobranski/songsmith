import Image from 'next/image';
import styles from './page.module.css';
import Logo from './components/Logo/Logo';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <Logo className={styles.logo}/>
        <h1 className={`${styles.reflectedText} ${styles.title}`} data-text='SongSmith'>
          Songsmith
        </h1>
        <Logo className={styles.logo}/>
      </div>
      <div className={styles.descriptionContainer}>
        <h2 >UNLOCK YOUR SONGWRITING POTENTIAL</h2>
        <p>A String School companion app built to teach music theory through songwriting and teach songwriting through music theory</p>
        <p>Coming 2024</p>
      </div>
    </main>

  )
}
