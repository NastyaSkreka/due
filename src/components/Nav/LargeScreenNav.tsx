import { links } from '@/constants'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LargeScreenNav = () => {
  const location = useLocation()
  const [isActive, setIsActive] = useState<number | null>(null)

  const handleItemClick = (index: number) => {
    setIsActive(index)
  }

  return (
    <nav className="max-lg:hidden  flex justify-between items-center max-container mb-4">
      <ul className="flex-1 flex justify-center items-center gap-12 font-medium max-lg:hidden">
        {links.map((link, index) => (
          <li key={link.to}>
            <Link
              to={link.to}
              onClick={() => handleItemClick(index)}
              className={`${
                link.to === location.pathname ? 'activeLink' : 'link'
              } hover:text-blue-600 transition-colors duration-300 ease-in-out`}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default LargeScreenNav
