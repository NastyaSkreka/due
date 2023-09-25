import { motion } from 'framer-motion'
import { fadeInLeft } from '@/components/animation/animations'

export default function DocumentReviewSnippet() {
  return (
    <motion.div {...fadeInLeft}>
      <img
        src={require('./document-review.png')}
        width={677}
        height={694}
        className={'max-w-full object-contain'}
        alt="Document Review"
      />
    </motion.div>
  )
}
