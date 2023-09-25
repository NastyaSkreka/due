import { DocumentReviewSnippet } from '@/assets/snippets'
import AnimatedReviewItems from '@/components/animation/items/AnimatedReviewItems'
import Title from './components/Title'
import Decor from './components/Decor'

const Review = () => {
  return (
    <>
      <Title
        number="2"
        title="Review"
        content="Review documents using our AI-based document review templates."
        descr="All your specialists will record their findings using a standard document review template to ensure consistency. Avoid key findings being missed by less experienced reviewers. This will save time being written off for collating inconsistent reports and re-working them to make them consistent."
      />
      <div className="flex justify-between max-lg:items-center items-start max-lg:flex-col max-sm:gap-5 gap-20 w-full max-container">
        <div className="flex-1 flex justify-center">
          <DocumentReviewSnippet />
        </div>
        <Decor />
        <div className="flex flex-1 flex-col">
          <AnimatedReviewItems />
        </div>
      </div>
    </>
  )
}

export default Review
