import styles from './header.module.css'

export default function Header() {
  return (
    <div id={styles.headerContainer}>
      <h1 id={styles.headerTitle}>Header Here</h1>
    </div>
  )
}