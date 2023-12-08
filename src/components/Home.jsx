import {HiArrowNarrowRight} from 'react-icons/hi'
import Me from '../assets/Me.jpg'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home'  className=' bg-gradient-to-b from-slate-700 to-sky-900 w-full h-screen z-0  flex flex-col lg:flex-row justify-center items-center'>
      
      {/* Container */}
      <div className='max-w-[800px]  h-full flex flex-col justify-center px-4 mt-10'>
        
        <p className='text-special'>Hi, my name is</p>
        <h1 className='text-4xl lg:text-7xl font-bold text-textdef z-30'>Pascual Flores</h1>
        <h2 className='text-4xl lg:text-7xl  text-gray-400 z-30 '>I'm a web developer</h2>
        <p className='text-textdef py-4 max-w-[700px] z-30'>Recently graduated 23 year old engineer looking for an opportunity to perform as a FrontEnd Developer. Proficient in languages, communication skills, sense of design and with a strong passion for programming and learning!</p>
        <div>
        <Link to="work" smooth={true} duration={500} >
          <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-special hover:border-special'>View Work
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-4'/> 
          </span>
          </button>
          </Link>
        </div>
        
      </div>
      <div className=' '>
          <img className='mb-12  top-16 end-[350px] shadow-lg z-10 justify-center  overflow-hidden border-2 rounded-full w-[250px] h-[250px]' src={Me} alt="Me" />
          </div>
      
    </div>
  )
}
export default Home