import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { logo} from "../assets";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function Foooter() {
  return (
    <Footer container className=' bg-grey font-medium text-white'>
      <div className='w-full max-w-7xl mx-auto h-full'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-2'>
          <Link to ='/' className='self-center whitespace-nowrap text-sm sm:text-l font-semibold dark:text-white'>
        </Link>
          </div>
        
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
        <img src={logo} alt='logo' className='w-10 h-10' />
          <Footer.Copyright
            href='#'
            by=" Rimsha Arshad"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-2 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/rimsha_arshad773' icon={BsFacebook}/>
            <Footer.Icon href='https://www.instagram.com/rimsha_arshad773' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/RimshaWebDev' icon={BsGithub}/>
            <Footer.Icon href='https://dribbble.com/Rim_sha' icon={BsDribbble}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}