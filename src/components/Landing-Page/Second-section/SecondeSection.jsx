import React from 'react'
import { useEffect } from 'react'

import Aos from 'aos'
import "aos/dist/aos.css"

import styles from "./SecondeSection.module.css"

import Image from 'next/image'
import WebDev from "../../../assets/webdev.jpg"


const SecondeSection = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <div className={styles.SecondSection}>
        <aside data-aos="fade-right" >           
            <h1 >Hire your remote dream team!</h1>
            <p>
            Hire your remote team that is handpinked through technical tests. 
            Junior and experienced developers, data scientists, 
            devOps and designers at your disposal according to your business needs.
            </p>
        </aside>
        <Image
            data-aos="fade-left"
            src={WebDev}
            alt="Picture of the author"
            width={600}
            height={400}
            />
    </div>
  )
}

export default SecondeSection