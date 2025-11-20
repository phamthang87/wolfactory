import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';

export default function Games() {
  const games = [
    { title: 'Game One', img: '/game1.png' },
    { title: 'Game Two', img: '/game2.png' },
    { title: 'Game Three', img: '/game3.png' }
  ];

  return (
    <>
      <Navbar />
      <main style={{padding:'50px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:'20px'}}>
        {games.map(g => <GameCard key={g.title} title={g.title} img={g.img} />)}
      </main>
      <Footer />
    </>
  );
}
