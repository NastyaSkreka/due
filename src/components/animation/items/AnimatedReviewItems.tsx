import { useEffect } from "react";
import { Element } from "react-scroll";
import { motion} from "framer-motion";
import { AiIcon,  CustomReportIcon, ReportIcon } from "@/assets/icons";


const items = [
  {
    icon: ReportIcon,
    title: "Consistent reporting",
    description:
      "All your document reviewers can consistently report their findings as they can select from pre-written answers. The system will also suggest pre-written ‘red flags’ based on their responses to questions. As red flags are able to be written consistently, your client can easily search for them and act on your recommendations based on the severity of the issue identified.",
  },
  {
    icon: CustomReportIcon,
    title: "Customise your templates",
    description:
      "You can customise our standard templates using our no-code tools so you can tailor your review based on the scope of work agreed with your client such as exceptions only reporting or a full detailed report.",
  },
  {
    icon: AiIcon,
    title: "AI augmented document review",
    description:
      "Eliminate the monotonous parts of document review that consumes expensive chargeable hours (and not recoverable from clients) using our AI augmented review such as entity extraction.",
  },
];

const AnimatedReviewItems = () => {
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPosition = 1000; 

      if (scrollY >= triggerPosition) {
      
      }
    };
  
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
                  <item.icon/>
                </div>
                <p className="mt-4 text-xl font-semibold">{item.title}</p>
                <p className="max-md:max-w-2xl  max-lg:text-sm  max-lg:max-w-3xl  mt-6 text-d">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Element>
      </div>
    );
            }
export default AnimatedReviewItems;