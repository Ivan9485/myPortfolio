'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import P from "../../../public/images/P.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";



const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(Boolean)
  const [isOpened, setIsOpened] = useState(false)
  useEffect(()=>{
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        console.log(isMobile);
        
      } else {
        setIsMobile(false);
        console.log(isMobile);
        
      }
    });
  
  },[isMobile])

  return (
    <>
    {
      isMobile === true ? (
          <nav className="flex justify-between p-6 bg-white fixed w-full">
            {/* logo */}
            <div>
            <Image className="w-10 h-10" src={P} width={500} height={500} alt="Pascual Flores Logo"/>
            </div>
            {/* hamburger */}
            <div>{isOpened ? (<RxCross1 onClick={()=>setIsOpened(false)} className="w-8 h-8 text-[#00BF63]"/>) : (<RxHamburgerMenu onClick={()=>setIsOpened(true)} className="w-8 h-8 text-[#00BF63]"/>)}</div>
            {/* menu */}
            <div className={isOpened ? "w-full h-[300px] flex flex-col gap-4 absolute top-20 right-0 bg-white p-4 items-center z-50 justify-evenly" : "hidden"}>
              <Link href="/" onClick={()=>setIsOpened(false)}><p className="hover:cursor-pointer hover:text-[#00BF63]">ABOUT ME</p></Link>
              <Link onClick={()=>setIsOpened(false)} href="/projects"><p className="hover:cursor-pointer hover:text-[#00BF63]">PROJECTS</p></Link>
              <Link onClick={()=>setIsOpened(false)} href="/contact"><p className="hover:cursor-pointer hover:text-[#00BF63]">CONTACT</p></Link>
              <p className="hover:cursor-pointer hover:text-[#00BF63]">RESUME</p>
            </div>
          </nav>
      ) : (<nav >
        {/* Desktop */}
        <div className="w-full h-20 bg-white flex justify-between items-center fixed text-sm z-40">
          {/* Content left */}
          <div className="ml-16 flex gap-20 ">
            <Link href="/"><p className="hover:cursor-pointer hover:text-[#00BF63]">ABOUT ME</p></Link>
            <Link href="/projects"><p className="hover:cursor-pointer hover:text-[#00BF63]">PROJECTS</p></Link>
          </div>
  
          {/* Logo middle */}
          <Link href="/"><Image src={isHovered ? "/images/Plight.png" : "/images/P.png"} alt="Pascual's Logo" 
            width={500}
            height={500}
            className="w-12 h-12 hover:cursor-pointer justify-between"
            onMouseOver={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            /></Link>
          {/* Content right */}
  
          <div className="mr-16 flex gap-20 ">
            <Link href="/contact"><p className="hover:cursor-pointer hover:text-[#00BF63]">CONTACT</p></Link>
            <p className="hover:cursor-pointer hover:text-[#00BF63]">RESUME</p>
          </div>
        </div>
        {/* Mobile */}
      </nav>)
    }
    </>
  )
}
export default Navbar