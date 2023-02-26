import React from 'react'
import Header from '../Header/Header'
import Demo from './Demo/Demo'
import SecondeSection from './Second-section/SecondeSection'
import ThirdSection from './ThirdSection/ThirdSection'
import FourthSection from './ThirdSection/FourthSection/FourthSection'
import FifthSection from './Fifth-Section/FifthSection'
import SixSection from './Sixth-Section/SixSection'
import TeamSection from './Team-Section/TeamSection'
import Footer from '../Footer/Footer'
import ContactForm from '../contact-form/ContactForm'
const LandingPage = () => {
  return (
    <>
        <Header />
        <Demo />
        <SecondeSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixSection />
        <TeamSection />
        <ContactForm />
        <Footer />
    </>
  )
}

export default LandingPage