import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/LFFlogo.svg"
import Link from 'next/link'

import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
        <div className={styles.logo}>
            <Image
            src={Logo}
            alt="Picture of the author"
            width={50}
            height={50}
            />
            <h3 className={styles.title}>LFF Design</h3>
        </div>
        <nav className={styles.nav}>
            <li><a>Demonstration</a></li>
            <li><a>Pourquoi nous choisir</a></li>
            <Link className={styles.link} href="/contact">Demander un devis</Link>
        </nav>
    </header>
    </div>
  )
}

export default Header