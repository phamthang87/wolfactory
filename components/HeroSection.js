// components/HeroSection.js
import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      
      {/* FIX nhỏ: container để canh lề giống GamesSection */}
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Wolfactory Studio</h1>

          <p className={styles.subtitle}>
            We craft immersive mobile experiences with elegant visuals and focused gameplay.
          </p>

          <a href="#games" className={styles.cta}>
            Explore Our Games
          </a>
        </div>
      </div>

    </section>
  );
}
