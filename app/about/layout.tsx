import styles from "./styles.module.css";

export const metadata = {
  title: "About Page",
  description: "Created by PPT",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
