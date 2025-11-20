// pages/index.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GamesSection from "../components/GamesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wolfactory | Mobile Game Studio</title>
      </Head>

      <Navbar />

      <main>
        <HeroSection />
        <GamesSection />
      </main>

      <Footer />
    </>
  );
}
