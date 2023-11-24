import { useState } from 'react';
import {FaBars,FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
import Logo from '../assets/LogoRed.svg';



const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-700 text-gray-300  z-50">
      <div className='w-20 h-full font-bold text-3xl'>
        <img src={Logo} className='p-4' alt="PF" />
      </div>

      {/* Menu */}
        <ul className='hidden md:flex'>
          <li>
          <Link className='hover:text-special' to="home" smooth={true} duration={500} >
            Home
          </Link>
          </li>
          <li>
          <Link className='hover:text-special' to="about" smooth={true} duration={500} >
            About
          </Link>
          </li>
          <li>
          <Link className='hover:text-special' to="work" smooth={true} duration={500} >
            My Work
          </Link>
          </li>
          <li>
          <Link className='hover:text-special' to="contact" smooth={true} duration={500} >
            Contact Me
          </Link>
          </li>
          <li>
          <Link className='hover:text-special' to="skills" smooth={true} duration={500} >
            Hobbies
          </Link>
          </li>
        </ul>
      {/* Hamburguer */}
      <div onClick={handleClick} className='md:hidden z-20 '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      
      <ul className={!nav ? 'hidden' : 'absolute left-0 top-0 items-center flex flex-col justify-center w-full h-screen'}>
          <li className='py-6 text-4xl' ><Link onClick={handleClick} to="home" smooth={true} duration={500} >
            Home
          </Link></li>
          <li className='py-6 text-4xl' ><Link onClick={handleClick} to="about" smooth={true} duration={500} >
            About
          </Link></li>
          <li className='py-6 text-4xl' ><Link onClick={handleClick} to="work" smooth={true} duration={500} >
            My Work
          </Link></li>
          <li className='py-6 text-4xl' ><Link onClick={handleClick} to="contact" smooth={true} duration={500} >
            Contact Me
          </Link></li>
          <li className='py-6 text-4xl' ><Link onClick={handleClick} to="skills" smooth={true} duration={500} >
            Hobbies
          </Link></li>
        </ul>
      

      {/* Social Icons */}
      <div className='hidden lg:flex flex-col  fixed top-[35%] left-0 '>
        <ul>
          <li className='w-[165px] h-[60px] justify-between items-center flex bg-blue-800  ml-[-100px] hover:ml-[-10px] duration-300'>
            <a target="_blank" rel="noopener noreferrer" className='  flex justify-between items-center w-full text-textdef' 
            href="https://linkedin.com/in/pascual-flores-395287196">LinkedIn <FaLinkedin size={38}/></a>
          </li>
          <li className='w-[165px] h-[60px] justify-between items-center flex bg-gray-700  ml-[-100px] hover:ml-[-10px] duration-300'>
            <a target="_blank" rel="noopener noreferrer" className='  flex justify-between items-center w-full text-textdef' 
            href="https://github.com/Ivan9485">GitHub <FaGithub size={38}/></a>
          </li>
          <li className='w-[165px] h-[60px] justify-between items-center flex bg-terciary  ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='  flex justify-between items-center w-full text-textdef' 
            href="mailto:pascual_815@hotmail.com">Mail <HiOutlineMail size={38}/></a>
          </li>
          <li className='w-[165px] h-[60px] justify-between items-center flex bg-gray-400  ml-[-100px] hover:ml-[-10px] duration-300'>
            <a target="_blank" rel="noopener noreferrer" className='  flex justify-between items-center w-full text-textdef' 
            href="https://drive.google.com/file/d/1QfRgHZ3O4WGHcXSNi-eDrt1U8Hj67mQ_/view?usp=sharing">C.V. <BsFillPersonLinesFill size={38}/></a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar