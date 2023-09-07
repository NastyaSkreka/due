import {navLinks} from '../constants'
import Logo from '@/assets/icons/logo';

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container mb-4'>
                <a href="">
                    <Logo/>
                </a>
                <ul className='flex-1 flex justify-center items-center gap-12 font-medium max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                                className="font-montserrat leading-normal text-xl"
                            >{item.label}</a>
                        </li>
                    ))}
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