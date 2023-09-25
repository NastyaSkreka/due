import { ReportsSnippet } from '@/assets/snippets'

import AnimatedShareItems from '@/components/animation/items/AnimatedShareItems'
import Decor from './components/Decor'
import Title from './components/Title'

const Share = () => {
  return (
    <>
      <Title
        number="3"
        title="Share"
        content="Share your findings with your client in real time."
        descr="Deals often move quickly and clients want to know what the red flags are as soon as they are discovered, to avoid any delays in completing the transaction. Differentiate yourself from your competitors by securely sharing your findings in real-time with your clients."
      />
      <div className="flex justify-between max-lg:items-center items-start max-lg:flex-col max-sm:gap-5 gap-20 w-full max-container">
        <div className="flex-1 flex justify-center">
          <ReportsSnippet />
        </div>
        <Decor />
        <div className="flex flex-1 flex-col">
          <AnimatedShareItems />
        </div>
      </div>
    </>
  )
}

export default Share
