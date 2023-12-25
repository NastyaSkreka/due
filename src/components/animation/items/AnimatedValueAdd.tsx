import { useEffect } from 'react'
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'

import SoftwareSolution from '@/assets/icons/card-01'
import Report from '@/assets/icons/card-02'
import Customise from '@/assets/icons/card-03'
import RedFlags from '@/assets/icons/card-04'

interface Item {
  bgColor: string
  icon: React.ReactNode
  description: string
  colorIcon: string
}

const items: Item[] = [
  {
    icon: <SoftwareSolution />,
    bgColor: 'bg-secondary-2',
    colorIcon: 'bg-primary-2',
    description:
      'Our software solution simplifies due diligence by centralizing document management. With our data room, you can access, allocate, and track documents for review in real time, streamlining the process.',
  },
  {
    icon: <Report />,
    bgColor: 'bg-success-1',
    colorIcon: 'bg-success-2',
    description:
      'Our software solution simplifies due diligence by centralizing document management. With our data room, you can access, allocate, and track documents for review in real time, streamlining the process.',
  },
  {
    icon: <Customise />,
    bgColor: 'bg-error-1',
    colorIcon: 'bg-error-2',
    description:
      'Our software solution simplifies due diligence by centralizing document management. With our data room, you can access, allocate, and track documents for review in real time, streamlining the process.',
  },
  {
    icon: <RedFlags />,
    bgColor: 'bg-warn-1',
    colorIcon: 'bg-warn-3',
    description:
      'Our software solution simplifies due diligence by centralizing document management. With our data room, you can access, allocate, and track documents for review in real time, streamlining the process.',
  },
]

const AnimatedValueAdd = () => {
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
      <div className="flex flex-row gap-10 w-full overflow-hidden flex-wrap justify-center py-5">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col gap-3 p-8 rounded-xl origin-bottom-left w-[520px] min-h-[250px] ${item.bgColor}`}
            initial={{ scale: 0, originX: 0, originY: 1 }}
            whileInView={{ scale: 1, originX: 0, originY: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className={`flex flex-col justify-center items-center card  w-12 h-12 rounded-lg border-none ${item.colorIcon}`}
            >
              {item.icon}
            </div>
            <div className="leading-normal text-xl lg:text-lg">
              {item.description}
            </div>
          </motion.div>
        ))}
      </div>
    </Element>
  )
}
export default AnimatedValueAdd
