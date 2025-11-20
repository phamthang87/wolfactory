// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/games", label: "Games" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.brand}>
            <Image src="/logo.png" alt="Wolfactory" width={36} height={36} />
            <span>WOLFACTORY</span>
          </a>
        </Link>

        <div className={`${styles.links} ${open ? styles.open : ""}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <a className={router.pathname === l.href ? styles.active : ""} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </Link>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
