import { useState } from 'react';
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  // State quản lý việc đóng mở menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // Hàm đảo ngược trạng thái: Đang đóng thành mở và ngược lại
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logo}>
           {/* Lưu ý: Đảm bảo file ảnh có trong public/resources/ */}
           <Link href="/">
             <img src="/resources/logo.png" alt="Wolfactory" />
           </Link>
        </div>

        {/* Nút 3 gạch (Chỉ hiện trên mobile) */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={isOpen ? styles.barOpen : ''}></span>
          <span className={isOpen ? styles.barOpen : ''}></span>
          <span className={isOpen ? styles.barOpen : ''}></span>
        </div>

        {/* Danh sách Link - Sẽ thêm class active khi isOpen = true */}
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <Link href="#games" onClick={() => setIsOpen(false)}>GAMES</Link>
          <Link href="#careers" onClick={() => setIsOpen(false)}>CAREERS</Link>
        </div>
      </div>
    </nav>
  );
}
