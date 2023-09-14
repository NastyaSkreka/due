import Logo from '@/assets/icons/logo';
import {Link  } from 'react-router-dom'

import {links} from '../constants'


const Nav = () => {
    return (
        <header className='py-8 absolute left-0 top-0 z-50 w-full '>
            <div className='flex align-center min-h-100 max-container max-lg:flex max-lg:justify-between max-lg:items-center mb-5'>
                <Link to="/">
                        <Logo/>
                    </Link>
            <nav className='max-lg:hidden  flex justify-between items-center max-container mb-4'>
                <ul className='flex-1 flex justify-center items-center gap-12 font-medium max-lg:hidden'>
                {links.map((link) => (
                    <li key={link.to}>
                    <Link to={link.to} className="leading-normal text-xl">
                        {link.text}
                    </Link>
                    </li>
                ))}
                </ul>
                </nav>
                <div className='max-lg:hidden  flex gap-4 items-center mb-4'>
                <button className='flex justify-center items-center px-7 py-4 border text-xl leading-none border-2 border-slate-500 rounded-2xl text-slate-500 ' >
                        Login
                </button>
                <button className='flex justify-center items-center px-7 py-4 border text-xl leading-none text-white rounded-2xl bg-sky-500/100 '>
                        Book a demo
                </button>
                </div>
               
                <div className="w-10 h-10 hidden border-2 border-cyan-600 rounded-lg max-lg:block p-2 ">
                    <div className="w-5 h-1 bg-sky-500 mb-1"></div>
                    <div className="w-5 h-1 bg-sky-500 mb-1"></div>
                    <div className="w-5 h-1 bg-sky-500"></div>
                </div>
                </div>
           <hr/>
        </header>
         
    );
};

export default Nav;