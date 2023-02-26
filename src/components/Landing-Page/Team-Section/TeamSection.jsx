import React,{useEffect, useState} from 'react'

import Aos from 'aos'
import "aos/dist/aos.css"

import { team } from './team'

import styles from "./team.module.css"

const TeamSection = () => {
    
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <section>
        <h1 className={styles.title}>Une équipe toujours presente pour répondre à vos besoins</h1>
        <div className={styles.container}>
            <div className="underline"></div>
            {team.map(el=>{
                const [show,setShow] = useState(false)
                return(
                    <div data-aos="fade-up" className={styles.card}>
                        <h1 style={{textDecoration:"underline"}}>{el.firstName}</h1>
                        <p>{el.img}</p>
                        <p>Profession : {el.profession}</p>
                        <p>{show ? el.more : `${el.more.substring(0,200)}...`}</p>
                        <button className={styles.btn} style={{border:"none", fontSize:"1.3rem",padding:"2vh"}} onClick={()=> setShow(prevState => !prevState)}>{show ? "Hide" : "Show more"}</button>
                    </div>
                )
            })}
        </div>

    </section>
  )
}

export default TeamSection