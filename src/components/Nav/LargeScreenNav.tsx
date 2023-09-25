import { links } from '@/constants'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LargeScreenNav = () => {
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
              className={index === isActive ? 'activeLink' : 'link'}
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
