import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/GameDetail.module.css";

export default function GameDetail() {
  const router = useRouter();
  const { id } = router.query;

  // dữ liệu mẫu
  const games = {
    1: {
      title: "Chiến Binh Thép",
      tagline: "Action RPG with tactical battles.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      google: "#",
      apple: "#",
      description:
        "Chiến Binh Thép là một tựa game hành động nhập vai với combat tốc độ cao và chiến thuật sâu...",
    },
    2: {
      title: "Huyền Thoại Rồng",
      tagline: "Strategy meets collectible heroes.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      google: "#",
      apple: "#",
      description:
        "Huyền Thoại Rồng đưa bạn vào thế giới robot tương lai với những trận chiến hoành tráng...",
    },
    3: {
      title: "Vũ Trụ Áo",
      tagline: "Exploration and cozy progression.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      google: "#",
      apple: "#",
      description:
        "Vũ Trụ Áo là game phiêu lưu nhẹ nhàng, nơi người chơi khám phá vũ trụ và xây dựng thế giới riêng...",
    },
  };

  const game = games[id];
  if (!game) return null;

  return (
    <>
      <Navbar />

      <div className={styles.wrapper}>

        {/* HERO */}
        <div className={styles.hero}>
          <h1 className={styles.title}>{game.title}</h1>
          <p className={styles.tagline}>{game.tagline}</p>

          <div className={styles.buttons}>
            <a href={game.google} className={styles.btn}>Google Play</a>
            <a href={game.apple} className={styles.btn}>App Store</a>
          </div>
        </div>

        {/* VIDEO */}
        <div className={styles.videoWrapper}>
          <iframe
            src={game.video}
            frameBorder="0"
            allowFullScreen
            className={styles.video}
          ></iframe>
        </div>

        {/* DESCRIPTION */}
        <div className={styles.section}>
          <h2 className={styles.heading}>Giới thiệu</h2>
          <p className={styles.desc}>{game.description}</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
