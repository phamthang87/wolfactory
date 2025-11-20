import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{padding:'50px'}}>
        <h1>Contact Us</h1>
        <p>Email: contact@wolfactory.com</p>
        <p>Phone: +84 123 456 789</p>
      </main>
      <Footer />
    </>
  );
}
