import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { logo} from "../assets";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function Foooter() {
  return (
    <Footer container className=' border border-t-6 border-purple-700 bg-grey font-medium text-grey'>
      <div className='w-full max-w-7xl mx-auto h-full'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-2'>
          <Link to ='/' className='self-center whitespace-nowrap text-sm sm:text-l font-semibold dark:text-white'>
        <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
        </Link>
          </div>
          <div className='grid grid-cols-4 gap-9 mt-1 sm:grid-cols-4 sm:gap-5'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Our Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Rimsha Arshad
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/RimshaWebDev'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Contact Us' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Email</Footer.Link>
                <Footer.Link href='#'>Contact info</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
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