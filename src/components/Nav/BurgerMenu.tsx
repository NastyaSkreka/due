import { useState, useEffect } from 'react'
import { Burgerlinks } from '@/constants'
import Logo from '@/assets/icons/logo'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const BurgerMenu = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const menuVariants = {
    hidden: {
      scale: 0,
      transformOrigin: 'top right',
      transition: { duration: 1 },
    },
    visible: {
      scale: 1,
      transformOrigin: 'top right',
      transition: { duration: 1 },
    },
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  
  return (
    <div className="relative">
      <div
        onClick={toggleMenu}
        className={`w-10 h-10 max-lg:block lg:hidden xl:hidden border-2 border-cyan-600 rounded-lg p-2 cursor-pointer`}
      >
        <div className="w-5 h-1 bg-sky-500 mb-1"></div>
        <div className="w-5 h-1 bg-sky-500 mb-1"></div>
        <div className="w-5 h-1 bg-sky-500"></div>
      </div>
      {isMenuOpen && (
        <div className="menu-overlay visible">
        <motion.div
          initial="hidden"
          animate={isMenuOpen ? 'visible' : 'hidden'}
          variants={menuVariants}
          className="flex flex-col menu-body"
        >
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center my-3">
                <Logo />
                <button
                  onClick={() => {
                    closeMenu()
                  }}
                  className="menu-btn primary-3 md-3  border-2 rounded-md p-1"
                >
                  <div className="flex flex-row w-full items-center gap-2 ">
                    <div className="flex flex-row w-full flex-1  items-center gap-2 ">
                      <div className="flex flex-col w-full flex-1 ">
                        <svg
                          className="fill-current p-1"
                          height="18"
                          viewBox="0 0 24 24"
                          width="18"
                        >
                          <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <span className="w-full h-[1px] bg-gray-300"></span>
            </div>
            <div className="flex flex-col h-full">
              <p className="font-semibold  text-lg mb-2 mt-4 sm:mt-8">Main</p>
              <div className="flex flex-col justify-start items-start gap-1">
                {Burgerlinks.map((link) => (
                  <div
                    key={link.to}
                    className={`flex flex-row justify-start items-center w-full rounded-lg lg:w-fit p-3 gap-5 ${
                      link.to === location.pathname
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-black'
                    }`}
                  >
                    {link.icon}
                    <a className="text-lg" href={link.to}>
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default BurgerMenu
