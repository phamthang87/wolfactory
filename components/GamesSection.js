import styles from "../styles/GamesSection.module.css";

export default function GamesSection() {
  // Dữ liệu giả lập giống Demo
  const games = [
    { id: 1, title: "Chiến Binh Thép", desc: "Game hành động nhập vai bối cảnh tương lai.", img: "/resources/game1.png" },
    { id: 2, title: "Huyền Thoại Rồng", desc: "Game chiến thuật thời gian thực đỉnh cao.", img: "/resources/game2.png" },
    { id: 3, title: "Vũ Trụ Ảo", desc: "Khám phá thế giới mở vô tận.", img: "/resources/game3.png" },
  ];

  return (
    <section id="games" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {games.map((game) => (
            <div key={game.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                 <img src={game.img} alt={game.title} />
              </div>
              <div className={styles.cardContent}>
                <h3>{game.title}</h3>
                <p>{game.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
