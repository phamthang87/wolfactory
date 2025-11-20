// components/Layout.js
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title = "Wolfactory" }) {
  return (
    <>
      <Head>
        <title>{title} | Wolfactory</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Wolfactory - Mobile game studio from Vietnam" />
        <meta property="og:title" content={`${title} | Wolfactory`} />
        <meta property="og:description" content="Wolfactory - Mobile game studio from Vietnam" />
        <meta property="og:image" content="/logo.png" />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
