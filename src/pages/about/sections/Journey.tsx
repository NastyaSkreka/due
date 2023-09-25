import CardItem from '@/components/about/card-item'
import { motion, AnimatePresence } from 'framer-motion'
import CardSlider from '@/components/about/card-slider'

export type UserJourneyType = {
  imageUrl: string
  description: string
  step: number | string
}
export type CardType = {
  imageUrl: string
  description: string
  step: string
}

const userJourneyCards: UserJourneyType[] = [
  {
    imageUrl: 'https://doitwithdue.com/images/user-journey/with-due-01.svg',
    description:
      'Anna assembles a team of specialist lawyers to review the documents',
    step: 'Step - 01',
  },
  {
    imageUrl: 'https://doitwithdue.com/images/user-journey/with-due-02.svg',
    description: 'Documents are uploaded to Due and are sorted and classified',
    step: 'Step - 02',
  },
  {
    imageUrl: 'https://doitwithdue.com/images/user-journey/with-due-03.svg',
    description:
      'Tom goes through the documents and discusses the scope with the client',
    step: 'Step - 03',
  },
  {
    imageUrl: 'https://doitwithdue.com/images/user-journey/with-due-04.svg',
    description:
      'Maple is notified she has been added to the project and has documents to review',
    step: 'Step - 04',
  },
  {
    imageUrl: 'https://doitwithdue.com/images/user-journey/with-due-05.svg',
    description:
      'Maple heads back to her desk to look at the documents she needs to review and by when.',
    step: 'Step - 05',
  },
  {
    imageUrl: 'https://doitwithdue.com/images/user-journey/with-due-06.svg',
    description:
      'Maple can ease into her work day with clarity and confidence knowing that she won’t miss anything in her document review as she is using an approved template.',
    step: 'Step - 06',
  },
  {
    imageUrl: 'https://doitwithdue.com/images/user-journey/with-due-07.svg',
    description:
      'Maple’s review automatically forms part of the master report, along with the input of other specialists without having to save a local copy to share via email.',
    step: 'Step - 07',
  },
  {
    imageUrl: 'https://doitwithdue.com/images/user-journey/with-due-08.svg',
    description:
      'Maple and Tom review the list of red flags identified by the specialist reviewers, all consistently written and presented',
    step: 'Step - 08',
  },
  {
    imageUrl: 'https://doitwithdue.com/images/user-journey/with-due-09.svg',
    description:
      'Tom shares updates and early findings with the client, allowing them to update their purchasing strategy.',
    step: 'Step - 09',
  },
  {
    imageUrl: 'https://doitwithdue.com/images/user-journey/with-due-10.svg',
    description:
      'Congratulations, you helped your client close another deal on time and on budget!',
    step: 'Step - 10',
  },
]

const bgColorLeft = [
  'journey-card_secondary01',
  'journey-card_secondary02',
  'journey-card_secondary03',
  'journey-card_secondary04',
  'journey-card_secondary05',
  'journey-card_secondary01',
  'journey-card_secondary02',
  'journey-card_secondary03',
  'journey-card_secondary04',
  'journey-card_secondary05',
  'journey-card_secondary01',
]
const bgColorRigth = [
  'journey-card_main01',
  'journey-card_main02',
  'journey-card_main03',
  'journey-card_main04',
  'journey-card_main05',
  'journey-card_main01',
  'journey-card_main02',
  'journey-card_main03',
  'journey-card_main04',
  'journey-card_main05',
  'journey-card_main01',
]

const Journey = () => {
  return (
    <div className="wrapper">
      <div className="w-full">
        <div className=" flex items-center flex-col justify-center gap-4 w-full max-xl:padding-x ">
          <div className=" max-md:text-center max-md:leading-normal max-xl:text-4xl text-8xl mb-5 font-semibold">
            User <span className="text-blue-600">Journey</span>
          </div>
        </div>
        <div className="w-full my-10 space-y-4">
          <AnimatePresence initial={false}>
            {userJourneyCards.map((userJourneyItem, index) => (
              <motion.div
                key={userJourneyItem.step}
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'sticky', top: 50 + index * 20 }}
              >
                <div className="hidden md:block">
                  <CardItem
                    {...userJourneyItem}
                    leftColor={bgColorLeft[index]}
                    rightColor={bgColorRigth[index]}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="md:hidden">
            <CardSlider cards={userJourneyCards as CardType[]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey
