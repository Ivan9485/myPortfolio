'use client'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiInstagram } from "react-icons/si";
import { useState, useEffect } from "react";

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
            <FaLinkedin className="w-6 h-6 hover:text-[#00BF63] hover:cursor-pointer" />
            <FaGithub className="w-6 h-6 hover:text-[#00BF63] hover:cursor-pointer" />
            <IoMdMail className="w-6 h-6 hover:text-[#00BF63] hover:cursor-pointer" />
            <SiInstagram className="w-6 h-6 hover:text-[#00BF63] hover:cursor-pointer" />
          </div>
        
        </div>
      </footer>)
    }
    </>
  )
}
export default Footer