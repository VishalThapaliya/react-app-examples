import React from 'react';
import Hero from '../../components/layout/hero/Hero';
import FeaturedApps from '../../featuredApps/FeaturedApps';
import Contact from '../../components/layout/contact/Contact';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedApps />
      <Contact />
    </main>
  )
}

export default HomePage