import Logo from "@/assets/icons/logo";
import LinkedInIcon from "@/assets/icons/linkedin-icon";
import FacebookIcon from "@/assets/icons/facebook-icon";
import InstagramIcon  from '@/assets/icons/instagram-icon';
import TwitterIcon  from '@/assets/icons/twitter-icon';
import YoutubeIcon from '@/assets/icons/youtube-icon';
import { footerLinks } from '@/constants';
/*flex flex-col items-start*/

const Footer = () => {
    return (
        <footer className='max-container'>
        <div className='flex justify-between items-start  flex-wrap max-lg:flex-col'>
          <div className='w-full md:w-4/12 space-y-4'>
            <a href='/'>
             <Logo/>
            </a>
            <p className='mt-6 text-base leading-7  sm:max-w-sm'>
                Due® is fully encrypted and keeps all your sensitive information 100% secure and private.
            </p>
            <div className='flex items-center gap-2 mt-8'>
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                   <LinkedInIcon/>
                </div>
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                   <FacebookIcon/>
                </div>
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                   <InstagramIcon/>
                </div>
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                   <TwitterIcon/>
                </div>
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                   <YoutubeIcon/>
                </div>        
            </div>
          </div>
  
        <div className='w-full md:w-7/12 flex flex-col lg:pl-28 py-6 lg:py-0 space-y-4' >
        <h4 className='text-3xl leading-normal font-medium'>
                    Useful Links
        </h4>
          <div className='flex flex-1 lg:gap-10 gap-10 flex-wrap'>
            {footerLinks.map((section) => (
              <div>             
                <ul>
                  {section.links.map((link) => (
                    <li className='mt-3 text-xl leading-normal' key={link.name}>
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </div>
        </div>
        <hr className="border-basic-500 mt-10"/>
        <div className='flex  mt-24 max-sm:items-center'>
          <div className='flex flex-1 justify-start items-center gap-2'>
            <p>© 2023 Due Diligence Software Pty Ltd.</p>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;