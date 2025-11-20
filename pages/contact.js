// pages/contact.js
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact">
      <section className="container" style={{ padding: "60px 20px" }}>
        <h1 className="section_title">Contact</h1>
        <p className="section_desc">Email: contact@wolfactory.com</p>
        <p className="section_desc">Phone: +84 123 456 789</p>
      </section>
    </Layout>
  );
}
