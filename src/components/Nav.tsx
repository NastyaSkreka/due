import Logo from '@/assets/icons/logo';
import {Link  } from 'react-router-dom'


const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container mb-4'>
                <Link to="/">
                    <Logo/>
                </Link>
                <ul className='flex-1 flex justify-center items-center gap-12 font-medium max-lg:hidden'>
                    <li>
                        <Link to="/about" className="font-montserrat leading-normal text-xl">About us</Link>
                    </li>
                    <li>
                        <Link  to='/pricing' className="font-montserrat leading-normal text-xl">Pricing</Link>
                    </li>
                    <li>
                        <Link  to='/careers' className="font-montserrat leading-normal text-xl">Careers</Link>
                    </li>
                    <li>
                        <Link to='/contact'  className="font-montserrat leading-normal text-xl">Contact us</Link>
                    </li>
                </ul>
                <div className='flex gap-4'>
                <button className='flex justify-center items-center px-7 py-4 border text-xl leading-none border-4 border-black rounded-lg text-black' >
                        Login
                </button>
                <button className='flex justify-center items-center px-7 py-4 border text-xl leading-none text-white rounded-lg bg-sky-500/100 '>
                        Book a demo
                </button>
                </div>
            </nav>
           <hr/>
        </header>
         
    );
};

export default Nav;