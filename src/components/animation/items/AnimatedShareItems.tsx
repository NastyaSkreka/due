import { useEffect } from 'react'
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { CheckIcon, CustomReportIcon, DocumentIcon } from '@/assets/icons'

const items = [
  {
    icon: CheckIcon,
    title: 'Consistent reporting',
    description:
      'All your document reviewers can consistently report their findings as they can select from pre-written answers.',
  },
  {
    icon: DocumentIcon,
    title: 'Generate insights',
    description:
      'Generate a list of red flags and recommendations that are drafted consistently across all your reviewers. Clients can provide their instructions within the platform on each red flag to avoid back-and-forth emails.',
  },
  {
    icon: CustomReportIcon,
    title: 'Customise your reports',
    description:
      'All report templates are fully customisable using our proprietary no code-tools. You can customise them based on your firm’s branding or style guide, drafting preferences and client requirements.',
  },
]

const AnimatedShereItems = () => {
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
    <div className="flex flex-1 flex-col">
      <Element name="animated-items">
        <div className="py-8 space-y-14 with-full">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="max-sm:text-center max-lg:p-5 max-lg:border-2 max-lg:border-md max-lg:rounded-lg  max-lg:border-indigo-500  max-lg:items-center flex flex-col lg:max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              <div>
                <item.icon />
              </div>
              <p className="mt-4 text-xl font-semibold">{item.title}</p>
              <p className="max-md:max-w-2xl  max-lg:text-sm  max-lg:max-w-3xl  mt-6 text-d">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Element>
    </div>
  )
}
export default AnimatedShereItems
