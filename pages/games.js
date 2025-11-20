// pages/games.js
import Layout from "../components/Layout";
import GamesSection from "../components/GamesSection";

export default function Games() {
  return (
    <Layout title="Games">
      <section style={{ paddingTop: 20 }}>
        <GamesSection />
      </section>
    </Layout>
  );
}
