import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/home/Home';
import  Footer  from './pages/home/sections/Footer';
import Pricing from './pages/pricing/sections/Pricing';


const App = () => {
    return (
        <Router>
      <div className='relative'>
        <Nav />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    )
}

export default App;

