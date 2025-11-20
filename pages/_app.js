import Head from 'next/head'; // 1. Import cái này
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* 2. Thêm thẻ Head cấu hình cho Mobile */}
      <Head>
        <title>Wolf Factory</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* 3. Render Component chính */}
      <Component {...pageProps} />
    </>
  );
}
