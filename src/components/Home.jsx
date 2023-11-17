import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home'  className='bg-secondary w-full h-screen '>
      
      {/* Container */}
      <div className='max-w-[800px] mx-auto h-full flex flex-col justify-center'>
        <p className='text-special'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-textdef '>Pascual Flores</h1>
        <h2 className='text-4xl sm:text-7xl  text-gray-400 '>I'm a web developer</h2>
        <p className='text-textdef py-4 max-w-[700px]'>Recently graduated 23 year old engineer looking for an opportunity to perform as a FrontEnd Developer. Proficient in languages, communication skills, sense of design and with a strong passion for programming and learning!</p>
        <div>
          <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-special hover:border-special'>View Work
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-4'/> 
          </span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Home