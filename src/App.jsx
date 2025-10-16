import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import ApplicationsPage from './pages/applicationsPage/ApplicationsPage'
import AboutPage from './pages/aboutPage/AboutPage';
import ContactPage from './pages/contactPage/ContactPage';

// Import Applications
import GradientGeneratorApp from './featuredApps/gradientGenerator/GradientGenerator';
import CalculatorApp from './featuredApps/calculator/Calculator';
import AvatarGeneratorApp from './featuredApps/avatarGenerator/AvatarGenerator';
import FileFolderExplorerApp from './featuredApps/fileFolderExplorer/FileFolderExplorer';

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
        <Route path='/applications/avatar-generator' element={<AvatarGeneratorApp />}/>
        <Route path='/applications/file-folder-explorer' element={<FileFolderExplorerApp />}/>

        {/* Handle 404 pages */}
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App