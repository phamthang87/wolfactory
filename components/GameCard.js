// components/GameCard.js
import styles from "../styles/GameCard.module.css";
import Image from "next/image";

export default function GameCard({ img = "/resources/game1.png", title = "Untitled", desc = "" }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <button className={styles.cta}>View Game</button>
      </div>
    </article>
  );
}
