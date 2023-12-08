import workimg from '../assets/projects/workimg.jpeg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import FOTO1 from '../assets/projects/SURVEYS1.png';
import FOTO2 from '../assets/projects/SURVEYS2.png';
import FOTO3 from '../assets/projects/SURVEYS3.png';
import FOTO4 from '../assets/projects/SURVEYS4.png';
import HOTEL1 from '../assets/projects/HOTEL1.png';
import HOTEL2 from '../assets/projects/HOTEL2.png';
import HOTEL3 from '../assets/projects/HOTEL3.png';
import HOTEL4 from '../assets/projects/HOTEL4.png';
import AERO1 from '../assets/projects/AERO1.jpg'
import AERO2 from '../assets/projects/AERO2.jpg'
import AERO3 from '../assets/projects/AERO3.jpg'
import Accordion from './smcomponents/Accordion';
import Technologies from './smcomponents/Technologies';

const Work = () => {

  const slides1 = [FOTO1,FOTO2,FOTO3,FOTO4];
  const slides2 = [HOTEL1,HOTEL2,HOTEL3,HOTEL4]
  const slides3 = [AERO1,AERO2,AERO3];
  const [list, setList] = useState([
    {
      question: "Description",
      answer: "Online Surveys FullStack Application, FrontEnd made with React, Laravel for Backend and Tailwind CSS for Style.",
      active: 0
    },
    {
      question: "Objective",
      answer: "This was an attempt to practice backend tasks, such as CRUD operations, data validations, handling http requests and API development",
    }
  ]);

  const [list2, setList2] = useState([
    {
      question: "Description",
      answer: "FrontEnd Hotel Web Page, created with Typescript and styled with Tailwind CSS.",
      active: 0
    },
    {
      question: "Objective",
      answer: "Practice design using Tailwind and my first time using Typescript with react",
    }
  ]);

  const [list3, setList3] = useState([
    {
      question: "Description",
      answer: "Simulation of a civil aircraft in Matlab, the Simulink consists of a closed-loop controller with angles from a gyroscope input, the plots represent the trajectory traces of the aircraft that will be shown in the simulation",
      active: 0
    },
    {
      question: "Objective",
      answer: "A flight model represents the dynamic processes of an aircraft translated into a mathematical language, with models like this we can reduce test costs, investigate inaccessible environments and validate new designs. ",
    }
  ]);

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  const prevSlide1 = () => {
    const isFirstSlide = currentIndex1 === 0;
    const newIndex = isFirstSlide ? slides1.length - 1 : currentIndex1 - 1;
    setCurrentIndex1(newIndex);
  }

  const nextSlide1 = () => {
    const isLastSlide = currentIndex1 === slides1.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex1 + 1;
    setCurrentIndex1(newIndex);
    }

    const prevSlide2 = () => {
      const isFirstSlide = currentIndex2 === 0;
      const newIndex = isFirstSlide ? slides2.length - 1 : currentIndex2 - 1;
      setCurrentIndex2(newIndex);
    }
  
    const nextSlide2 = () => {
      const isLastSlide = currentIndex2 === slides1.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
      setCurrentIndex2(newIndex);
      }

      const prevSlide3 = () => {
        const isFirstSlide = currentIndex3 === 0;
        const newIndex = isFirstSlide ? slides3.length - 1 : currentIndex3 - 1;
        setCurrentIndex3(newIndex);
      }
    
      const nextSlide3 = () => {
        const isLastSlide = currentIndex3 === slides3.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex3 + 1;
        setCurrentIndex3(newIndex);
        }

  
  return (
    <div name='work' className="w-full h-full text-gray-300 bg-slate-700">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-16">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-special">Work</p>
          <p className="flex py-6">Check out some of my recent work </p>
        </div>

        <div className="bg-gray-200 p-7 rounded-t-lg shadow-md flex gap-4 flex-col md:flex-row">
          {/* Grid item */}
          <div className='w-full'>
          <div style={{backgroundImage: `url(${slides1[currentIndex1]})`}}  className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div ">
            {/* Hover Effects */}
            <div className='w-full opacity-0 group-hover:opacity-100 duration-300'>
              <div className='  flex justify-between '>
                <div className='cursor-pointer'>
                <IoIosArrowBack onClick={prevSlide1} size={28}/> 
                </div>
                <div className='cursor-pointer'>
                  <IoIosArrowForward onClick={nextSlide1} size={28}/>
                </div>
              </div>
              
              </div>
            </div>
            {/* Title and buttons */}
            <div className='pt-4'>
              <div className=' flex justify-center'>
              <p className='flex text-lg text-black'><Technologies size={"w-4"}  type={"Laravel"} />-<Technologies size={"w-5"}  type={"React"} />Application</p>
              </div>
              <div>
              <div className='text-center'>
                <a target="_blank" rel="noopener noreferrer" href="https://myportfolio-ivan.net/">
                  <button className='border-gray-300 border-2 text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 hover:bg-slate-100 font-bold text-lg'>Demo</button>
                </a>
                <a target="_blank" rel="noopener noreferrer"  href="https://github.com/Ivan9485/react-surveys">
                  <button className='border-gray-300 hover:bg-slate-100 border-2 text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
              </div>
            </div>
            {/* Accordion */}
            <div>
            <div className=' h-full flex justify-center items-center'>
                <div className='list'>
                {
                    list.map((item, key) => (
                      <Accordion key={key} datas={item} />
                    ))
                  }
                </div>
                  
              </div>
            </div>
            </div>

            {/* Second Work card */}
          <div className='w-full'>
          <div style={{backgroundImage: `url(${slides2[currentIndex2]})`}}  className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div ">
            {/* Hover Effects */}
            <div className='w-full opacity-0 group-hover:opacity-100 duration-300'>
              <div className='  flex justify-between '>
                <div className='cursor-pointer'>
                <IoIosArrowBack onClick={prevSlide2} size={28}/> 
                </div>
                <div className='cursor-pointer'>
                  <IoIosArrowForward onClick={nextSlide2} size={28}/>
                </div>
              </div>
              
              </div>
            </div>
            {/* Title and buttons */}
            <div className='pt-4'>
              <div className=' flex justify-center'>
              <p className='flex text-lg text-black'><Technologies size={"w-5"}  type={"Typescript"} />Static Web Page</p>
              </div>
              <div>
              <div className='text-center'>
                <a target="_blank" rel="noopener noreferrer" href="https://wellhallhotel.pages.dev/">
                  <button className='border-gray-300 border-2 text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 hover:bg-slate-100 font-bold text-lg'>Demo</button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ivan9485/WellHallHotel">
                  <button className='border-gray-300 hover:bg-slate-100 border-2 text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
              </div>
            </div>
            {/* Accordion */}
            <div>
            <div className=' h-full flex justify-center items-center'>
                <div className='list'>
                {
                    list2.map((item, key) => (
                      <Accordion key={key} datas={item} />
                    ))
                  }
                </div>
                  
              </div>
            </div>
            </div>
                 

            


          </div>
                {/* Second ROW */}
          <div className='w-full h-full bg-gray-200 p-7 rounded-b-lg flex justify-center '>
                   {/* Third Card */}
            <div className='sm:w-1/2 w-full'>
          <div style={{backgroundImage: `url(${slides3[currentIndex3]})`}}  className="shadow-lg shadow-black group container rounded-md flex justify-center items-center  content-div2">
            {/* Hover Effects */}
            <div className='w-full opacity-0 group-hover:opacity-100 duration-300'>
              <div className='  flex justify-between '>
                <div className='cursor-pointer'>
                <IoIosArrowBack onClick={prevSlide3} size={28}/> 
                </div>
                <div className='cursor-pointer'>
                  <IoIosArrowForward onClick={nextSlide3} size={28}/>
                </div>
              </div>
              
              </div>
            </div>
            {/* Title and buttons */}
            <div className='py-4'>
              <div className=' flex justify-center'>
              <p className='flex text-lg text-black'><Technologies size={"w-6 h-6"}  type={"Matlab"} />and Simulink Flight Model</p>
              </div>
              <div>
              {/* <div className='text-center'>
                <a target="_blank" rel="noopener noreferrer" href="https://wellhallhotel.pages.dev/">
                  <button className='border-gray-300 border-2 text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 hover:bg-slate-100 font-bold text-lg'>Demo</button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ivan9485/WellHallHotel">
                  <button className='border-gray-300 hover:bg-slate-100 border-2 text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div> */}
              </div>
            </div>
            {/* Accordion */}
            <div>
            <div className=' h-full flex justify-center items-center'>
                <div className='list'>
                {
                    list3.map((item, key) => (
                      <Accordion key={key} datas={item} />
                    ))
                  }
                </div>
                  
              </div>
            </div>
            </div>
          </div>

        </div>





      </div>
  )
}
export default Work