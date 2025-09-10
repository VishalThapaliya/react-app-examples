import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import ApplicationsPage from './pages/applicationsPage/ApplicationsPage'
import AboutPage from './pages/aboutPage/AboutPage';
import ContactPage from './pages/contactPage/ContactPage';

// Import Applications
import GradientGeneratorApp from './featuredApps/gradientGenerator/GradientGenerator';
import CalculatorApp from './featuredApps/calculator/Calculator';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/applications' element={<ApplicationsPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/contact' element={<ContactPage />} />

        {/* Applications */}
        <Route path='/applications/gradient-generator' element={<GradientGeneratorApp />} />
        <Route path='/applications/calculator' element={<CalculatorApp />} />
      </Routes>
    </Router>
  )
}

export default App