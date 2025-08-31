import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/header/Header'
import HomePage from './pages/homePage/HomePage'

const App = () => {
  return (
    <Router>
      <Header />
    </Router>
  )
}

export default App