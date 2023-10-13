import Image from 'next/image';
import styles from './page.module.css';
import Logo from './components/Logo/Logo';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <Logo className={styles.logo}/>
        <h1 className={`${styles.reflectedText} ${styles.title}`} data-text='SongSmith'>
          SongSmith
        </h1>
        <Logo className={styles.logo}/>
      </div>
      <div className={styles.descriptionContainer}>
        <h2 >UNLOCK YOUR SONGWRITING POTENTIAL</h2>
        <p>A songwriting app built to teach music theory</p>
        <p>Coming Winter 2023</p>
      </div>
    </main>

  )
}
