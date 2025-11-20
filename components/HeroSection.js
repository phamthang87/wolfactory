// components/HeroSection.js
import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Wolfactory Studio</h1>

        <p>
          We craft immersive mobile experiences — beautiful visuals, tight gameplay
          and global ambitions.
        </p>

        <button className={styles.ctaButton}>
          Explore Our Games
        </button>
      </div>
    </section>
  );
}
