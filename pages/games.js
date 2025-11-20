// pages/games.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GamesSection from "../components/GamesSection";

export default function GamesPage() {
  return (
    <>
      <Head>
        <title>Wolfactory | Our Games</title>
      </Head>

      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        <GamesSection />
      </main>

      <Footer />
    </>
  );
}
