import { motion } from 'framer-motion'

const AnimatedGradientText = () => {
  return (
    <motion.div
      className="max-sm:text-3xl max-lg:text-4xl text-8xl mb-5 font-bold"
      style={{
        backgroundImage:
          'linear-gradient(90deg,#6989f5,#f5ae53,#ec658e,#6989f5)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundSize: '200% 200%',
      }}
      initial={{ backgroundPosition: '0% 0%' }}
      animate={{ backgroundPosition: '100% 100%' }}
      transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
    >
      Upload.Review.Share.
    </motion.div>
  )
}

export default AnimatedGradientText
