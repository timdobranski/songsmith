import Image from 'next/image';
import styles from './page.module.css';
import Logo from './components/Logo/Logo';

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
    </main>
  )
}
