import React, { useState } from 'react'
import Link from 'next/link'
import Footer from '../Footer/Footer'

import styles from "./contact.module.css"

const ContactForm = () => {
    const [infos,setInfos] = useState({
        email : "",
        firstName : "",
        lastName : "",
        informations : "",
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(infos)
    }
  return (
    <div className={styles.contact}>
        <button className={styles.retour}><Link href="/">Retour</Link></button>

        <h1>Remplissez ce formulaire et nous vous contacterons</h1>
        <div className={styles.underline}></div>
        <form onSubmit={handleSubmit} className={styles.form} action="">
            <input type="text" 
            value={infos.firstName} 
            onChange={(e)=>setInfos({...infos, firstName:e.target.value})}
            placeholder='First Name, ex : John' 
            />

            <input
            value={infos.lastName} 
            onChange={(e)=>setInfos({...infos, lastName:e.target.value})} 
            type="text" 
            placeholder='Last Name, ex : Doe' 
            />

            <input 
            value={infos.email} 
            onChange={(e)=>setInfos({...infos, email:e.target.value})}
            type="email" 
            placeholder='Email, ex john@doe.fr' 
            />

            <textarea name="" id="" cols="30" rows="10" 
            placeholder='Ajoutez des informations ...'
            value={infos.informations} 
            onChange={(e)=>setInfos({...infos, informations:e.target.value})}
            >

            </textarea>

            <button type='submit'>Envoyer</button>
        </form>
        <Footer />
    </div>
  )
}

export default ContactForm