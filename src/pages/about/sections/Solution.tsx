import SolutionSlider from '@/components/SolutionSlider'

export type CardSlider = {
  title: string
  description1: string
  description2: string
}

const Solution = () => {
  const cards: CardSlider[] = [
    {
      title: 'Set up data room',
      description1:
        'Upload documents from Seller`s data room (manually or via an integration)',
      description2: 'Securely store and OCR documents',
    },
    {
      title: 'Classify documents',
      description1: 'Determine which documents are in-scope and out-of-scope',
      description2:
        'Classify documents as: commercial contract, employment contract, constitution, etc',
    },
    {
      title: 'Assign documents to reviewers + track progress',
      description1:
        'Each document is assigned to lawyers based on materiality and specialty',
      description2: 'Track progress of review and update client',
    },
    {
      title: 'Review your documents',
      description1:
        'Lawyers review and extract key clauses and information from the documents',
      description2: 'Summarise key contracts or documents',
    },
    {
      title: 'Generate insights (red flags)',
      description1:
        'Recommend red flags based on responses to questions in the document review',
      description2: 'All reviewers report red flags consistently',
    },
    {
      title: 'Generate insights (red flags)',
      description1:
        'Generate due diligence report based on your customised templates',
      description2:
        'Export to MS Word or PDF or share report in the application',
    },
    {
      title: 'Set up data room',
      description1:
        'Upload documents from Seller`s data room (manually or via an integration)',
      description2: 'Securely store and OCR documents',
    },
    {
      title: 'Classify documents',
      description1: 'Determine which documents are in-scope and out-of-scope',
      description2:
        'Classify documents as: commercial contract, employment contract, constitution, etc',
    },
    {
      title: 'Assign documents to reviewers + track progress',
      description1:
        'Each document is assigned to lawyers based on materiality and specialty',
      description2: 'Track progress of review and update client',
    },
    {
      title: 'Review your documents',
      description1:
        'Lawyers review and extract key clauses and information from the documents',
      description2: 'Summarise key contracts or documents',
    },
    {
      title: 'Generate insights (red flags)',
      description1:
        'Recommend red flags based on responses to questions in the document review',
      description2: 'All reviewers report red flags consistently',
    },
    {
      title: 'Generate insights (red flags)',
      description1:
        'Generate due diligence report based on your customised templates',
      description2:
        'Export to MS Word or PDF or share report in the application',
    },
  ]

  return (
    <>
      <div className="w-full flex flex-col justify-center  max-container">
        <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
          <div className=" max-md:text-center max-md:leading-normal max-xl:text-4xl text-8xl mb-5 font-semibold">
            Our <span className="text-blue-600">Solution</span>
          </div>
          <p className="leading-normal mb-12 text-center lg:w-3/4 mx-auto text-xl">
            Our mission is to provide a single platform to make Mergers &
            Acquisitions, Initial Public Offerings and Real Estate transactions
            easier and faster by automating and streamlining the legal due
            diligence process.
          </p>
        </div>
        <SolutionSlider cards={cards as CardSlider[]} />
      </div>
    </>
  )
}

export default Solution
