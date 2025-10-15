import React from 'react';
import Hero from '../../components/layout/hero/Hero';
import FeaturedApps from '../../featuredApps/FeaturedApps';
import Contact from '../../components/layout/contact/Contact';
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';

const HomePage = () => {
  return (
    <div className="main-page">
      <Header />
      <main className='main-page'>
        <Hero />
        <FeaturedApps />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage