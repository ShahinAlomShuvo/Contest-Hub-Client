import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import GetIp from "../GetIp/GetIp";
import logo from "../../assets/Images/icon.png";

const Footer = () => {
  return (
    <footer className='py-10 bg-[#211835] sm:pt-16 lg:pt-24'>
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='footer grid-cols-2  md:grid-cols-4 p-10  text-neutral-content rounded'>
          <aside>
            <h2 className='text-lg lg:text-3xl font-bold'>ContestHub</h2>
            <p>
              ContestHub Ltd.
              <br />
              Arranging best contest since 1992
            </p>
            <span>
              <GetIp />
            </span>
          </aside>
          <nav>
            <header className='footer-title'>My Account</header>
            <a className='link link-hover'>My Winning Contest</a>
            <a className='link link-hover'>My Participated </a>
            <a className='link link-hover'>My Profile</a>
          </nav>
          <nav>
            <header className='footer-title'>Company</header>
            <Link to={"/"} className='link link-hover'>
              Home
            </Link>
            <Link to={"/allContest"} className='link link-hover'>
              All Contest
            </Link>
            <a className='link link-hover'>Contact</a>
          </nav>
          <nav>
            <header className='footer-title'>Legal</header>
            <a className='link link-hover'>Terms of use</a>
            <a className='link link-hover'>Privacy policy</a>
            <a className='link link-hover'>Cookie policy</a>
          </nav>
        </div>

        <hr className='mt-16 mb-10 border-gray-800' />

        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex  gap-2'>
            <img className='w-10' src={logo} alt='' />
            <h2 className='text-white text-3xl'>ContestHub</h2>
          </div>

          <ul className='flex items-center space-x-3 md:order-3'>
            <li>
              <a
                href='#'
                title=''
                className='flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600'
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href='#'
                title=''
                className='flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600'
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href='#'
                title=''
                className='flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600'
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href='#'
                title=''
                className='flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600'
              >
                <FaInstagram />
              </a>
            </li>
          </ul>

          <p className='w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2'>
            © Copyright 2021, All Rights Reserved by ContestHub
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
