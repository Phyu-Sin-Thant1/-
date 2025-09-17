import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import MapPage from './pages/MapPage'
import PresalesPage from './pages/PresalesPage'
import InterestListPage from './pages/InterestListPage'
import AgentSignUpPage from './pages/AgentSignUpPage'
import ListPropertyPage from './pages/ListPropertyPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/presales" element={<PresalesPage />} />
        <Route path="/interest-list" element={<InterestListPage />} />
        <Route path="/agent-signup" element={<AgentSignUpPage />} />
        <Route path="/list-property" element={<ListPropertyPage />} />
      </Routes>
    </Router>
  )
}

export default App