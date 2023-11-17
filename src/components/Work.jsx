import workimg from '../assets/projects/workimg.jpeg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import FOTO1 from '../assets/projects/SURVEYS1.png';
import FOTO2 from '../assets/projects/SURVEYS2.png';
import FOTO3 from '../assets/projects/SURVEYS3.png';
import FOTO4 from '../assets/projects/SURVEYS4.png';
import Accordion from './smcomponents/Accordion';

const Work = () => {

  const slides = [FOTO1,FOTO2,FOTO3,FOTO4];
  const [list, setList] = useState([
    {
      question: "Description",
      answer: "Online Surveys Application created with React, Laravel and Tailwind.",
      active: 1
    },
    {
      question: "What do you do ?",
      answer: "I'm FullStack Deveoper",
    }
  ]);

  const [currentIndex1, setCurrentIndex1] = useState(0);

  const prevSlide1 = () => {
    const isFirstSlide1 = currentIndex1 === 0;
    const newIndex1 = isFirstSlide1 ? slides.length - 1 : currentIndex1 - 1;
    setCurrentIndex1(newIndex1);
  }

  const nextSlide1 = () => {
    const isLastSlide1 = currentIndex1 === slides.length - 1;
    const newIndex1 = isLastSlide1 ? 0 : currentIndex1 + 1;
    setCurrentIndex1(newIndex1);
    }

  

  return (
    <div name='work' className="w-full md:h-screen text-gray-300 bg-secondary">
      <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-special">Work</p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 bg-white p-7 rounded-lg shadow-md">
          {/* Grid item */}
          <div style={{backgroundImage: `url(${slides[currentIndex1]})`}}  className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div ">
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

            <div style={{backgroundImage: `url(${workimg})`}}  className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
React JS Application
              </span>
              
              
              </div>
            </div>

            <div>
              <div className='text-center'>
              <p className='text-lg text-black'>Laravel-React Application</p>
              </div>
              <div>
              <div className='text-center'>
                <a href="/">
                  <button className='border-gray-600 border-2 text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 hover:bg-slate-100 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='border-gray-600 hover:bg-slate-100 border-2 text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
              </div>
            </div>

            <div>
            <div className='text-center'>
            <p className='text-lg text-black'>React-Typescript Web Page</p>
            </div>

            </div>

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
        </div>





      </div>
  )
}
export default Work