import { useState } from 'react';

import Languages from '../assets/languages.webp';


const Skills = () => {
  const [count, setCount] = useState(0)


 

  return (
    <div name='skills' className='w-full h-screen bg-secondary z-10'>
      {/* Content Block */}
      <div className='max-w-[800px] h-full p-4 px-20'>
        <div className='text-4xl font-bold text-textdef inline '>
          <p>My Hobbies</p>
        </div>
        <div className='py-3 text-textdef'>
          <p>These are the things i currently enjoy!</p>
        </div>
        {/* Carousel */}
        <div className='h-full w-full overflow-x-auto overflow-y-hidden'>
          {/* Carousel Items */}
          <ul className='w-[2200px] whitespace-nowrap flex'>

          <div className='container bg-white rounded-lg shadow-lg p-4 w-[320px] h-[500px] flex flex-col justify-between mr-8 mb-4 border-2'>
            {/* Contenido de tarjeta */}
            <div>
              {/* IMG */}
              <div className='w-full z-20 h-[200px]'>
                <img className='w-full h-full object-cover rounded-lg' src={Languages} alt="languages image" />
              </div>
              {/* INFO */}
              <div className='flex flex-col whitespace-normal '>
                <p className='h-full text-center font-bold py-1'>Aprender Idiomas</p>
                <p className='p-2 border-2  rounded-lg text-center overflow-auto h-[220px] '>Mi gusto por aprender me ha llevado a utilizar partes de mis tiempos libres para practicar otros idiomas! Mi enfoque mas reciente ha sido el Chino Mandarin Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita neque minima beatae blanditiis dolore eveniet error esse. Hic nobis magni quia magnam molestias dolorem nesciunt impedit, quam perspiciatis deleniti nihil.</p>

              </div>

            </div>
          </div>
         
          </ul>
        </div>

      </div>

    </div>
  )
}
export default Skills