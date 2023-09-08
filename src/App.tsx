import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Join from './pages/Careers/Careers';
import Home from './pages/home/Home';
import  Footer  from './pages/home/sections/Footer';
import Pricing from './pages/pricing/Pricing';


const App = () => {
    return (
        <Router>
        <Nav />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/careers" element={<Join/>} />         
          </Routes>
        </div>
        <div className='bg-slate-100 py-20'>
        <Footer /> 
        </div>
    </Router>
    )
}

export default App;

