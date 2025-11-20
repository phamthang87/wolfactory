import Head from 'next/head';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GamesSection from "../components/GamesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wolfactory | Mobile Game Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      
      <main>
        <HeroSection />
        
        <GamesSection />

        {/* Phần About - Viết trực tiếp style inline cho nhanh hoặc tạo file css riêng */}
        <section id="about" className="container" style={{ padding: '80px 20px' }}>
          <h2 className="section_title">About Wolfactory</h2>
          <p className="section_desc">
            Wolfactory là tổ hợp của những người đam mê game, khao khát tạo ra những sản phẩm giải trí tương tác đỉnh cao. 
            Chúng tôi không chỉ làm game, chúng tôi xây dựng những thế giới nơi người chơi có thể đắm chìm, kết nối và chinh phục.
            Với công nghệ tiên tiến và đội ngũ artist, developer hàng đầu Việt Nam, Wolfactory cam kết mang lại trải nghiệm chuẩn quốc tế.
          </p>
        </section>

        {/* Phần Careers */}
        <section id="careers" className="container" style={{ padding: '0 20px 100px 20px' }}>
          <h2 className="section_title">Careers At Wolfactory</h2>
          <p className="section_desc">
            Chúng tôi luôn tìm kiếm những bộ óc sáng tạo đam mê phát triển game. 
            Tại Wolfactory, bạn không chỉ là nhân viên, bạn là người kiến tạo. 
            Môi trường làm việc năng động, cởi mở và đầy thách thức đang chờ đón bạn.
            <br /><br />
            <strong>Hãy gửi CV ngay hôm nay!</strong>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
