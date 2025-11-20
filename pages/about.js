// pages/about.js
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About">
      <section className="container" style={{ padding: "60px 20px" }}>
        <h1 className="section_title">About Wolfactory</h1>
        <p className="section_desc">
          Wolfactory là nơi quy tụ những con người đam mê làm game. Chúng tôi xây dựng những sản phẩm có tính tương tác cao,
          đồ hoạ chỉn chu và gameplay hấp dẫn, dành cho thị trường toàn cầu.
        </p>
      </section>
    </Layout>
  );
}
