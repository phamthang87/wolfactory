// pages/index.js
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import GamesSection from "../components/GamesSection";

export default function Home() {
  return (
    <Layout title="Home">
      <HeroSection />
      <GamesSection />

      <section className="container about-snip" style={{ padding: "60px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div>
            <h2 className="section_title">About Us</h2>
            <p className="section_desc">
              Wolfactory is a passionate mobile game studio from Vietnam. We focus on tight gameplay, beautiful visuals,
              and evergreen mechanics that delight players.
            </p>
          </div>
          <div>
            <h2 className="section_title">Contact Us</h2>
            <p className="section_desc">contact@wolfactory.com<br/>+84 123 456 789</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
