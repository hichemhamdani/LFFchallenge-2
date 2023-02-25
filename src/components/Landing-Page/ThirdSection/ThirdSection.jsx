import React,{useEffect} from 'react'
import styles from "./ThirdSection.module.css"
import Aos from 'aos'
import "aos/dist/aos.css"

const ThirdSection = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <section className={styles.ThirdSection}>

        <p data-aos="fade-down-left">
            <span>You don’t need talents but you have a project in mind ?</span><br />
            We build world class web applications and cross-platform
             mobile apps that will help grow your business
        </p>
    </section>
  )
}

export default ThirdSection