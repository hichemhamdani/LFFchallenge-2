import React,{useEffect} from 'react'
import Image from 'next/image'

import {data} from "./avis"

import styles from "./SixSection.module.css"

import Aos from 'aos'
import "aos/dist/aos.css"

const SixSection = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    
  return (
    <div>
        <h1 data-aos="fade-left" className={styles.title}>Satisfaction client toujours au Rendez-vous</h1>
        <div className={styles.avisContainer}>
            {data.map((el,index)=>{
                return(
                    <div data-aos="fade-up-left" key={index} className={styles.card}>
                        <h2>{el.title}</h2>
                        <Image
                        src={el.img}
                        alt="Picture of the author"
                        width={200}
                        height={200}
                        />
                        <p>{el.avis}</p>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default SixSection