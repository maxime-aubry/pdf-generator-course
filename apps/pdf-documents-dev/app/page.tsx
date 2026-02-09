import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Liste des documents PDF</h1>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/invoice"  className={styles.link}>Invoice</Link>
        </li>
      </ul>
    </main>
  );
}
