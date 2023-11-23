import Tailwind from '../assets/tailwind.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Laravel from '../assets/laravel.svg';
import PlaneBg from '../assets/Planebg.jpg';

const About = () => {
  return (
    <div name='about' className=" w-full h-screen  relative text-textdef">
     <img className=' w-full h-full absolute' src={PlaneBg} alt="" />
     <div className='w-full h-full absolute bg-black opacity-50'></div>
    <div className="flex flex-col z-30 justify-center op items-center w-full h-full">
      <div className="max-w-[800px] w-full px-4 z-30 grid grid-cols-2 gap-8">
        <div className="md:text-right pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-special">About</p>
        </div>

        <div></div>
        
        </div>
        <div className="max-w-[800px] w-full grid md:grid-cols-2 gap-8 px-4 z-30">
          <div className="text-4xl font-bold md:text-right">
            <p> Aeronauthical Engineer and web developer technician.</p>
          </div>
        <div>
          <p className='pt-2'>Hi, I'm Pascual. I specialize in frontend Technologies such as HTML, CSS, JS, React and Tailwind. You can check out some of my work below or visit my Github. I also have experience working with PHP, C++ and Laravel for Backend Applications.
             </p>
        </div>
        </div>
  
        <div className="max-w-[800px] w-full grid grid-cols-2 px-4 gap-8 pt-4 z-30">
          <p className="sm:text-2xl text-center sm:text-right">My Preferred Tech</p>

          {/* STACK ITEMS */}
          <div className="flex gap-3 w-full">
            <div className='flex flex-col items-center'>
              <img className='w-10 sm:w-14' src={HTML} alt="HTML icon" />
              </div>
           
            <div >
              <img className='w-10 sm:w-14' src={JavaScript} alt="Javascript icon" />
            </div>
            <div>
              <img className='w-10 sm:w-14' src={ReactImg} alt="ReactImg icon" />
            </div>
            <div>
              <img className='w-10 sm:w-14' src={Tailwind} alt="Tailwind icon" />
            </div>
            <div>
              <img className='w-10 sm:w-14' src={Laravel} alt="Tailwind icon" />
            </div>
            
          </div>
        </div>
        
        
      
    </div>

    </div>
  )
}
export default About