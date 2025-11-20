import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{padding:'50px', maxWidth:'900px', margin:'auto'}}>
        <h1>About Wolfactory</h1>
        <p>Wolfactory là studio mobile game hàng đầu tại Việt Nam, chuyên phát triển các game giải trí sáng tạo. Chúng tôi tập trung vào gameplay thú vị, đồ họa đẹp mắt và trải nghiệm người chơi tối ưu.</p>
      </main>
      <Footer />
    </>
  );
}
