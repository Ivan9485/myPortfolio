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
      <div className='w-full h-full p-4 md:px-20 px-10'>
        <div className='text-4xl font-bold text-textdef inline text-center '>
          <p>My Hobbies</p>
        </div>
        <div className='py-3 text-textdef'>
          <p className='flex justify-center pb-3'>Get to know me! <HiArrowNarrowRight className='mt-1 ml-1 rotate-90' /> </p>
        </div>
        {/* Hobby List Div */}
        <div className='h-full w-full '>
          {/* Carousel Items */}
          <div className='w-full flex flex-col gap-10'>
          {
            Hobbies.map((hobby,index)=>(
              <div key={index} className=' bg-white rounded-lg shadow-lg w-full md:h-[350px] flex flex-col md:flex-row h-full '>
            {/* Contenido de tarjeta */}
            
              {/* IMG */}
              <div className='md:w-2/3 w-full z-20 h-[350px] flex'>
                <img className='w-full  h-full object-cover sm:rounded-t-lg  md:rounded-l-lg rounded-t-lg' src={hobby.image} alt="languages image" />
              </div>
              {/* INFO */}
              <div className='p-1 flex flex-col md:w-full'>
                <p className=' text-lg text-center font-bold py-1'>{hobby.name}</p>
                <hr className='mx-5' />
                <p className='p-2 rounded-lg text-center '>{hobby.description}</p>

              </div>

            
          </div>
            ))
          }
         
          </div>
        </div>

      </div>

    </div>
  )
}
export default Skills