// pages/contact.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "60px 20px", maxWidth: "900px", margin: "auto" }}>
        <h1>Contact Us</h1>

        <p style={{ color: "#ccc", marginBottom: "25px" }}>
          Wolfactory is a passionate mobile game studio from Vietnam.  
          We focus on tight gameplay, beautiful visuals, and evergreen mechanics  
          that delight players.
        </p>

        <p>Email: contact@wolfactory.com</p>
        <p>Phone: +84 123 456 789</p>
      </main>

      <Footer />
    </>
  );
}
