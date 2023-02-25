import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/LFFlogo.svg"

import styles from "./Header.module.css"

const Header = () => {
  return (
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
            <li><a>Demander un devis</a></li>
        </nav>
    </header>
  )
}

export default Header