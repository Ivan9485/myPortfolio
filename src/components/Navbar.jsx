import { useState } from 'react';
import {FaBars,FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-gray-300 shadow-sm">
      <div className='text-special px-2 text-3xl'>
        PF
      </div>

      {/* Menu */}
      
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      {/* Hamburguer */}
      <div onClick={handleClick} className='md:hidden z-20 '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      
      <ul className={!nav ? 'hidden' : 'absolute left-0 top-0 items-center flex flex-col justify-center w-full h-screen'}>
          <li className='py-6 text-4xl' >Home</li>
          <li className='py-6 text-4xl' >About</li>
          <li className='py-6 text-4xl' >Skills</li>
          <li className='py-6 text-4xl' >Work</li>
          <li className='py-6 text-4xl' >Contact</li>
        </ul>
      

      {/* Social Icons */}
      <div className='hidden lg:flex flex-col  fixed top-[35%] left-0 '>
        <ul>
          <li className='w-[165px] h-[60px] justify-between items-center flex bg-blue-800  ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='  flex justify-between items-center w-full text-textdef' 
            href="/">LinkedIn <FaLinkedin size={38}/></a>
          </li>
          <li className='w-[165px] h-[60px] justify-between items-center flex bg-gray-700  ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='  flex justify-between items-center w-full text-textdef' 
            href="/">GitHub <FaGithub size={38}/></a>
          </li>
          <li className='w-[165px] h-[60px] justify-between items-center flex bg-terciary  ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='  flex justify-between items-center w-full text-textdef' 
            href="/">Mail <HiOutlineMail size={38}/></a>
          </li>
          <li className='w-[165px] h-[60px] justify-between items-center flex bg-gray-400  ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='  flex justify-between items-center w-full text-textdef' 
            href="/">C.V. <BsFillPersonLinesFill size={38}/></a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar