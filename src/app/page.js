import styles from "./page.module.css";
import { jakarta } from "./layout.js"

/** this is the index page */
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
            <h1 className={jakarta.className}>The quick brown fox jumps over the lazy dog</h1>
            <h2 className={jakarta.className}>The quick brown fox jumps over the lazy dog</h2>
            <h3 className={jakarta.className}>The quick brown fox jumps over the lazy dog</h3>
            <p>The quick brown fox jumps over the lazy dog</p>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
