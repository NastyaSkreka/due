import { useEffect } from "react";
import { Element } from "react-scroll";
import { motion} from "framer-motion";
import { DocumentIcon, IconLock, ProgressIcon,  } from "@/assets/icons";


const items = [
  {
    icon: IconLock,
    title: "Securely store and share documents",
    description: "Upload and securely store the documents for review in the data room. Alternatively, if your client needs their own data room, you can allow them to securely share documents through Due.",
  },
  {
    icon: DocumentIcon,
    title: "Add your team and assign documents to specialists",
    description:
      "Add your team and outside advisors to the project, and assign documents to the specialist for review. Documents assigned to a reviewer will be added to their to-do list.",
  },
  {
    icon: ProgressIcon,
    title: "Track progress and adjust scope to deliver on time",
    description:
      "Track the progress of the document review and communicate this to the client in real-time. Know ahead of time if the document review is going to be completed on time based on the current progress and if not, adjust the scope of review to speed up the review.",
  },
];

const AnimatedUploadItems = () => {
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
      <div className="flex flex-1 flex-col ">
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
export default AnimatedUploadItems;