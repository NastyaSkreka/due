import ArrowIcon from '@/assets/icons/arrow-list'
import Table from './sections/Table'
import TableSlider from './sections/TableSlider'
import { motion } from 'framer-motion'

const textData = [
  'Monthly subscription based pricing (per user).',
  'No lock-in contracts. Cancel at any time, without fees.',
  'Amounts stated in USD and excludes applicable sales tax.',
]

const Pricing = () => {
  return (
    <section className="pt-60 pb-20 max-container">
      <div className="flex items-center flex-col justify-center mb-20">
        <h1 className="max-md:text-center max-md:leading-normal max-xl:text-4xl text-8xl mb-5 font-semibold">
          Membership <span className="text-blue-600">pricing</span>
        </h1>
      </div>
      <div className="mt-10 flex justify-center gap-10 w-full mx-auto flex-wrap mb-40">
        {textData.map((text, index) => (
          <motion.div
            key={index}
            className="p-5 border-primary-3 rounded-xl shadow-md"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-start gap-3">
              <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center">
                <ArrowIcon />
              </div>
              <p className="w-60 text-lg">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="hidden lg:block">
        <Table />
      </div>
      <div className="lg:hidden ">
        <TableSlider />
      </div>
    </section>
  )
}

export default Pricing
