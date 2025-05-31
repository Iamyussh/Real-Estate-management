import { useState } from 'react'
import AgentAuth from './modles/agent/pages/AgentAuth'
import { Route, Routes } from 'react-router-dom'
import Home from './modles/Home'
import AgentDashboard from './modles/agent/pages/AgentDashboard'
import PropertyBrowse from './modles/property/pages/PropertyBrowse'
import ContactSupport from './pages/ContactSupport'
import HomeNavbar from './components/HomeNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agentAuth" element={<AgentAuth />} />
        <Route path="/agentHome" element={<AgentDashboard />} />
        <Route path="/properties" element={<PropertyBrowse />} />
        <Route path="/contactSupport" element={<ContactSupport />} />
      </Routes>
    </>
  )
}

export default App
