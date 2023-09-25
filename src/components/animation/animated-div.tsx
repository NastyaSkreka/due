import { PropsWithChildren, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from 'usehooks-ts'

import { fadeInUp } from '@/components/animation/animations'

type AnimationProps = {
  once?: boolean
} & PropsWithChildren

function AnimatedDiv({ children, once = false }: AnimationProps) {
  const [isLarge, setIsLarge] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    setIsLarge(width > 1000)
  }, [width])

  if (!isLarge) {
    return <div className={'w-full'}>{children}</div>
  }

  return (
    <motion.div
      viewport={{ once }}
      variants={{ ...fadeInUp }}
      initial={'initial'}
      whileInView={'whileInView'}
      className={'w-full'}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
