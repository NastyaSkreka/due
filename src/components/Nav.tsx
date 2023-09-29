import Logo from '@/assets/icons/logo'
import { Link } from 'react-router-dom'
import LargeScreenNav from './Nav/LargeScreenNav'
import BurgerMenu from './Nav/BurgerMenu'

const Nav = () => {
  return (
    <header className="py-8 absolute left-0 top-0 z-50 w-full ">
      <div className="flex align-center min-h-100 max-container max-lg:flex max-lg:justify-between max-lg:items-center mb-5">
        <Link to="/">
          <Logo />
        </Link>
        <LargeScreenNav />

        <div className="max-lg:hidden  flex gap-4 items-center mb-4">
          <button className="flex justify-center items-center px-7 py-4  text-xl leading-none border-2 border-slate-500 rounded-2xl text-slate-500  hover:bg-slate-200 ">
            Login
          </button>
          <button className="flex justify-center items-center px-7 py-4 border text-xl leading-none text-white rounded-2xl bg-sky-500 hover:bg-sky-700  ">
            Book a demo
          </button>
        </div>

        <BurgerMenu />
      </div>
      <hr />
    </header>
  )
}

export default Nav
