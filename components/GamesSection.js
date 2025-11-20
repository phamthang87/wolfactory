// components/HeroSection.js
import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Wolfactory Studio</h1>

        <p className={styles.subtitle}>
          We craft immersive mobile experiences — beautiful visuals,
          tight gameplay, and global ambitions.
        </p>

        <a href="#games" className={styles.neonButton}>
          Explore Our Games
        </a>
      </div>
    </section>
  );
}
