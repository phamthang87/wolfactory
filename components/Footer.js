// components/Footer.js
import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container foot-grid">
        <div className="brand-col">
          <div className={styles.brand}>
            <Image src="/logo.png" alt="Wolfactory" width={40} height={40} />
            <span>WOLFACTORY</span>
          </div>
          <p>Chúng tôi tạo ra trải nghiệm game mobile tỉ mỉ và đầy cảm xúc.</p>
        </div>

        <div className={styles.links}>
          <a href="/about">About</a>
          <a href="/games">Games</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>

        <div className={styles.contact}>
          <strong>Contact</strong>
          <p>contact@wolfactory.com</p>
          <p>+84 123 456 789</p>
        </div>
      </div>
      <div className={styles.copyright}>© {new Date().getFullYear()} Wolfactory — All Rights Reserved</div>
    </footer>
  );
}
