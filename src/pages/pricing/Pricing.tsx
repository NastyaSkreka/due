import ArrowIcon from '@/assets/icons/arrow-list'
import Table from './sections/Table'
import TableSlider from './sections/TableSlider'
import { motion } from 'framer-motion'

const Pricing = () => {
  return (
    <section className="pt-60 pb-20 max-container">
      <div className="flex items-center flex-col justify-center mb-20">
        <h1 className="max-md:text-center max-md:leading-normal max-xl:text-4xl text-8xl mb-5 font-semibold">
          Membership <span className="text-blue-600">pricing</span>
        </h1>
      </div>
      <div className="mt-10 flex justify-center gap-10 w-full mx-auto flex-wrap mb-40">
        <motion.div
          className="p-5 border-primary-3 rounded-xl shadow-md"
          initial={{ x: '-100%' }} // Initial position (outside of the block, to the left)
          animate={{ x: 0 }} // Final position (inside the block)
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
        >
          <div className="flex items-start gap-3">
            <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center">
              <ArrowIcon />
            </div>
            <p className="w-60 text-lg">
              Monthly subscription based pricing (per user).
            </p>
          </div>
        </motion.div>

        <motion.div
          className="p-5 border-primary-3 rounded-xl shadow-md"
          initial={{ x: '-100%' }} // Initial position (outside of the block, to the left)
          animate={{ x: 0 }} // Final position (inside the block)
          transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
        >
          <div className="flex items-start gap-3">
            <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center">
              <ArrowIcon />
            </div>
            <p className="w-60 text-lg">
              No lock-in contracts. Cancel at any time, without fees.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="p-5 border-primary-3 rounded-xl shadow-md"
          initial={{ x: '-100%' }} // Initial position (outside of the block, to the left)
          animate={{ x: 0 }} // Final position (inside the block)
          transition={{ duration: 0.5, delay: 0.6 }} // Animation duration and delay
        >
          <div className="flex items-start gap-3">
            <div className="p-1 bg-primary-3 rounded-full flex items-center justify-center">
              <ArrowIcon />
            </div>
            <p className="w-60 text-lg">
              Amounts stated in USD and excludes applicable sales tax.
            </p>
          </div>
        </motion.div>
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
