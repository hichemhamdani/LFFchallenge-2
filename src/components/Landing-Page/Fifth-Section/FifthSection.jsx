import React, {useEffect} from 'react'
import { useReducer,useState } from 'react'

import {data,reducer} from "./Reducer/reducer"


import Aos from 'aos'
import "aos/dist/aos.css"

import styles from  "./FifthSection.module.css"


  const initialState = {
    films : data,
    filtered:false
  }
  
  
  

  

const FifthSection = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    const [state, dispatch] = useReducer(reducer, initialState);
    const [activedWeb, setActivedWeb] = useState(false);
    const [activedApp, setActivedApp] = useState(false);
    const [activedAll, setActivedAll] = useState(false);
  
    return (
      <div>
        <h1 className={styles.title}>Because we don’t do just tech</h1>
        <button
        className={`${styles.btn} ${activedWeb ? styles.blue : ""}`}
        onClick={()=>{
          dispatch({type:"FILTRE_VITRINE"})
          if(activedWeb==false){
            setActivedWeb(true)
            setActivedApp(false) 
            setActivedAll(false)
          }
        }}
        >
          Nos sites vitrines
        </button>
        <button 
        className={`${styles.btn} ${activedApp ? styles.blue : ""}`}
        onClick={()=>{
          dispatch({type:"WEB"})
          if(activedApp==false){
            setActivedApp(true)
            setActivedWeb(false)
            setActivedAll(false)         
          }
        }}
        >
          Nos web applications
        </button>
  
  
        <button
        className={`${styles.btn} ${activedAll ? styles.blue : ""}`}
        onClick={()=>{
          dispatch({type:"reset"})
          setActivedAll(true)
          setActivedApp(false)
          setActivedWeb(false)
          }}>All</button>
    <div className={styles.test}>
        <div data-aos="fade-down" className={styles.container}>
        {state.films.map((el,index)=>{
          return (
          <div data-aos="fade-down" className={styles.card} key={index}>
            <p data-aos="fade-down">Titre : {el.title}</p>
            <p data-aos="fade-down">Titre : {el.category}</p>
          </div>
          )
        })}
        </div>
    </div> 
      </div>
    )
  }

export default FifthSection