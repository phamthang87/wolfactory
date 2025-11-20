// components/GamesSection.js
import GameCard from "./GameCard";
import styles from "../styles/GamesSection.module.css";

export default function GamesSection() {
  const games = [
    { id: 1, title: "Chiến Binh Thép", desc: "Action RPG with tactical battles.", img: "/resources/game1.png" },
    { id: 2, title: "Huyền Thoại Rồng", desc: "Strategy meets collectible heroes.", img: "/resources/game2.png" },
    { id: 3, title: "Vũ Trụ Áo", desc: "Exploration and cozy progression.", img: "/resources/game3.png" },
  ];

  return (
    <section id="games" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Our Games</h2>

        <div className={styles.grid}>
          {games.map((g) => (
            <GameCard
              key={g.id}
              id={g.id}
              img={g.img}
              title={g.title}
              desc={g.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
