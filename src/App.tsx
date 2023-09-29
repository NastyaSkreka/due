import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Join from './pages/Careers/Careers'
import Home from './pages/home/Home'
import Footer from './components/Footer'
import Pricing from './pages/pricing/Pricing'
import About from './pages/about/About'

import './index.css'
import Connect from './pages/connect/Connect'

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/careers" element={<Join />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Connect />} />
          </Routes>
        </div>
        <div className="bg-slate-100 py-20">
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
