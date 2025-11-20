import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>WELCOME<br />TO WOLFACTORY</h1>
        <p>
          Chuyên sản xuất và phát hành mobile game chất lượng cao.<br/>
          Đưa trí tuệ Việt Nam vươn tầm thế giới.
        </p>
        <button className={styles.ctaButton}>EXPLORE OUR GAMES</button>
      </div>
    </section>
  );
}
