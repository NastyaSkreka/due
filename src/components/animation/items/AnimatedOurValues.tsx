import { useEffect } from 'react'
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'

import Value from '@/assets/icons/value-01'
import UnlockTime from '@/assets/icons/value-02'
import BeCurious from '@/assets/icons/value-03'

interface Item {
  icon: React.ReactNode
  description: string
  colorIcon: string
  title: string
}

const items: Item[] = [
  {
    icon: <Value />,
    title: 'Value',
    colorIcon: 'bg-success-1',
    description:
      'We use leading edge technology to create new possibilities for busy professionals',
  },
  {
    icon: <UnlockTime />,
    title: 'Unlock Time',
    colorIcon: 'bg-error-1',
    description:
      'Our solutions unlock time for busy professionals, enabling them to spend time on what matters inside and outside of work',
  },
  {
    icon: <BeCurious />,
    title: 'Be Curious',
    colorIcon: 'bg-warn-1',
    description:
      'We are curious — and we create opportunities for others to pursue their curiosity through the products we create',
  },
]

const AnimatedOurValues = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const scrollY = window.scrollY
    const triggerPosition = 1000

    if (scrollY >= triggerPosition) {
    }
  }

  return (
    <Element name="animated-items">
      <div className="flex flex-row justify-center gap-10 lg:px-10 pt-10 pb-32 flex-wrap">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-3 p-8 rounded-xl origin-bottom-left bg-white shadow-md w-[420px] min-h-[200px]"
            initial={{ scale: 0, originX: 0, originY: 1 }}
            whileInView={{ scale: 1, originX: 0, originY: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className={`flex flex-col justify-center items-center w-12 h-12 rounded-lg border-none ${item.colorIcon}`}
            >
              {item.icon}
            </div>
            <p className="font-semibold text-xl text-black">{item.title}</p>
            <div className="lg:text-lg ">{item.description}</div>
          </motion.div>
        ))}
      </div>
    </Element>
  )
}
export default AnimatedOurValues
