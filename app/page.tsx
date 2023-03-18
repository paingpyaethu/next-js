import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <Link href={"/about"}>Go to about page</Link>
      <Link href={"/users"}>Users</Link>
    </main>
  );
}
