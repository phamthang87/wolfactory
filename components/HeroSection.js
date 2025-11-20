// components/HeroSection.js
import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <h1 className={styles.title}>Wolfactory<br/>Studio</h1>
        <p className={styles.lead}>
          We craft immersive mobile experiences — beautiful visuals, tight gameplay and global ambitions.
        </p>
        <div className={styles.controls}>
          <a className={styles.primary} href="#games">Explore Our Games</a>
        </div>
      </div>
    </section>
  );
}
