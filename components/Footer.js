// components/Footer.js
import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.socials}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/resources/facebook.png" alt="Facebook" width={28} height={28} />
        </a>

        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Image src="/resources/youtube.png" alt="YouTube" width={32} height={32} />
        </a>
      </div>

      <p>© 2025 Wolfactory — All Rights Reserved</p>
    </footer>
  );
}
