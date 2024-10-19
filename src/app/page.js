'use client'
import styles from "./page.module.css";

/** this is the index page */
export default function Home() {
    const handleClick = () => {
      alert('Button clicked!');
    };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Home Page</p>
      </main>
    </div>
  );
}
