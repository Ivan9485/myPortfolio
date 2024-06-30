'use client'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiInstagram } from "react-icons/si";
import { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(Boolean)
  useEffect(()=>{
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        
      }
    });
  
  },[isMobile])
  return (
    <>
    {
      isMobile === true ? (<></>) : (<footer>
        <div className="bg-white w-full h-10 fixed bottom-0 flex justify-between items-center px-3 "> 
        {/* Hover with  */}
          <p className="text-xs">© 2024 Pascual Flores | Web Developer | pascual_815@hotmail.com</p>
          {/* Icons */}
          <div className="flex justify-evenly pr-5 w-44 ">
            <Link href="https://www.linkedin.com/in/pascual-flores/" target="_blank">
            <FaLinkedin className="w-6 h-6 hover:text-[#00BF63] hover:cursor-pointer" />
            </Link>
            <Link href="https://github.com/Ivan9485" target="_blank">
            <FaGithub className="w-6 h-6 hover:text-[#00BF63] hover:cursor-pointer" />
            </Link>
            <Link href="mailto:pascual_815@hotmail.com" target="_blank">
            <IoMdMail className="w-6 h-6 hover:text-[#00BF63] hover:cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/pascualflores/" target="_blank">
            <SiInstagram className="w-6 h-6 hover:text-[#00BF63] hover:cursor-pointer" />
            </Link>
          </div>
        
        </div>
      </footer>)
    }
    </>
  )
}
export default Footer