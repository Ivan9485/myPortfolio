import { useState } from 'react';

import Languages from '../assets/languages.webp';
import Minecraft from '../assets/Minecraft.png';
import Lana from '../assets/LanaPF.jpeg';
import FotoClub from '../assets/Photoclub.jpeg';
import SelfLearn from '../assets/self-learn.jpeg';
import GOT from '../assets/GOTPF.jpg';
import {HiArrowNarrowRight} from 'react-icons/hi'



const Skills = () => {
  const [count, setCount] = useState(0)
  const Hobbies = [
    {
      name:"Self-Learning",
      description:"A useful hobby and encouraged by college life, despite being a Webdev technician, most of my knowledge came from research in topics i was interested in, this led me to learn about React.js, TailWind, Laravel and several other technologies, because i wanted to learn different ways of doing things and then choose the ones that i felt more comfortable with. This continual pursuit of knowledge helps me to stay adaptive and innovative in the ever-evolving field of web development ",
      image:SelfLearn
    },
  {
    name:"Programming",
    description:"My first contact with programming was my HTML page that I made when I was 13 for a school project, it was a Wiki of my favorite game at that time, Minecraft. Then I swore it was beautifully designed and as you can see in the image above, it was not. Nevertheless I had the time of my life building it, since then programming has been a constant interest of mine",
    image:Minecraft
  },
  {
    name:"Photography",
    description:"In Highschool I joined the photography club as a last resource for not liking any of the sports available, I did not have many expectations but I was struck with the best, most loving teacher who shared her art with us, not only did I love photography instantly but I realized i was good at it and was encouraged to continue. Here I trained my eye for design as it comes hand in hand with being a good photographer",
    image:FotoClub
  },
  {
    name:"Language Learning",
    description:"Living at the border (Matamoros, Tamaulipas) showed me both the benefits and necessity of speaking another language, from being able to consume more kinds of content to having better career opportunities led me to learn English and French, and more recently Mandarin Chinese ",
    image:Languages
  },
  {
    name:"Music",
    description:"Even though I have no skills playing instruments, music is a very important part of my life. Some of my favorite artists are Lana Del Rey, Taylor Swift, Rosalia and Miley Cyrus. I grew up with their music and thus they are intertwined with parts of my life. Their work not only resonates with me emotionally but also serves as a driving force for my creativity, influencing my perspective and contributing to the person I am today.",
    image:Lana
  },
  {
    name:"Reading",
    description:"I developed this habit in my teens, reading helped me to sharpen my english skills, grow my creativity and meeting interesting and complex characters in fantastic worlds. My favorite genres are fantasy and sci-fi, some of my favorite books are Game of Thrones, Song of Achilles, The Hunger Games and Dune",
    image:GOT
  },
  


]

 

  return (
    <div name='skills' className='w-full h-full bg-gradient-to-b from-sky-900 to-slate-600 z-10'>
      {/* Content Block */}
      <div className=' h-full p-4 px-20'>
        <div className='text-4xl font-bold text-textdef inline '>
          <p>My Hobbies</p>
        </div>
        <div className='py-3 text-textdef '>
          <p className='flex'>Get to know me! <HiArrowNarrowRight className='mt-1 ml-1' /> </p>
        </div>
        {/* Carousel */}
        <div className='h-full w-full overflow-x-auto overflow-y-hidden'>
          {/* Carousel Items */}
          <ul className='w-[2200px] whitespace-normal flex'>

          {
            Hobbies.map((hobby,index)=>(
              <div key={index} className=' bg-white rounded-lg shadow-lg p-4 w-[320px] h-[500px] flex flex-col justify-between mr-8 mb-4 border-2'>
            {/* Contenido de tarjeta */}
            <div >
              {/* IMG */}
              <div className='w-full z-20 h-[200px]'>
                <img className='w-full h-full object-cover rounded-lg' src={hobby.image} alt="languages image" />
              </div>
              {/* INFO */}
              <div className='flex flex-col whitespace-normal '>
                <p className='h-full text-center font-bold py-1'>{hobby.name}</p>
                <p className='p-2 border-2  rounded-lg text-center overflow-auto h-[220px] '>{hobby.description}</p>

              </div>

            </div>
          </div>
            ))
          }
         
          </ul>
        </div>

      </div>

    </div>
  )
}
export default Skills