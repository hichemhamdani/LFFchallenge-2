import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import styles from './FourthSection.module.css'
import DemoSlideTwo from "../../../../assets/demo-slide-2.png"
import DemoSlideThree from "../../../../assets/demo-slide-3.png"
import DemoSlideFive from "../../../../assets/demo-slide-5.png"

const data = [
  {
    id: 1,
    img : DemoSlideTwo
  },
  {
    id: 2,
    img : DemoSlideThree
  },
  {
    id: 3,
    img : DemoSlideFive
  },
]


import Aos from 'aos'
import "aos/dist/aos.css"

const properties = {
  
}


const FourthSection = () => {

    const [page,setPage] = useState(0)
    const [slider,setSlider] = useState(data)
    useEffect(()=>{
        Aos.init()
    },[])


  return (
<section className={styles.FourtthSection}>
    <h1 className={styles.title}>Our Template are just ready to use</h1>
    <div className={styles.caroussel}>
      <div className={styles.test}>
        {page > 0 && (<Image src={slider[page-1].img}
      width={300}
      height={200}
      />)}
      <Image src={slider[page].img}
      width={600}
      height={500}
      />
      {page < 2 && (<Image src={slider[page+1].img}
      width={300}
      height={200}
      />)}
      </div>
      <div>
        <button disabled={page==0} onClick={()=>setPage(prevState=> prevState - 1)} >Previous</button>
        <button disabled={page==2} onClick={()=>setPage(prevState=> prevState + 1)}>Next</button>
      </div>
    </div>
</section>
  )
}

export default FourthSection