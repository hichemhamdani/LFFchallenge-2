import React,{useEffect} from 'react'
import Image from 'next/image'
import styles from './FourthSection.module.css'
import DemoSlideTwo from "../../../../assets/demo-slide-2.png"
import DemoSlideThree from "../../../../assets/demo-slide-3.png"
import DemoSlideFive from "../../../../assets/demo-slide-5.png"

import Aos from 'aos'
import "aos/dist/aos.css"


const FourthSection = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
<section className={styles.FourtthSection}>
    <h1 className={styles.title}>Our Template are just ready to use</h1>
    <div className={styles.caroussel}>
    <Image
        data-aos="fade-up"
      src={DemoSlideTwo}
      alt="Picture of the author"
      width={600}
      height={500}
    />
    <Image
        data-aos="fade-down"
      src={DemoSlideThree}
      alt="Picture of the author"
      width={600}
      height={500}
    />
    <Image
        data-aos="fade-up"
      src={DemoSlideFive}
      alt="Picture of the author"
      width={600}
      height={500}
    />
    </div>
</section>
  )
}

export default FourthSection