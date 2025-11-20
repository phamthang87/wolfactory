import styles from "../styles/GameCard.module.css";

export default function GameCard({ img, title, desc }) {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className={styles.viewBtn}>View Game</button>
    </div>
  );
}
