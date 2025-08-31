import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/header/Header'
import HomePage from './pages/homePage/HomePage'

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App