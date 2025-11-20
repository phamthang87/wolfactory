import Link from "next/link";
import styles from "../styles/GameCard.module.css";

export default function GameCard({ id, img, title, desc }) {
  return (
    <Link href={`/games/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <img src={img} alt={title} className={styles.image} />
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </Link>
  );
}
