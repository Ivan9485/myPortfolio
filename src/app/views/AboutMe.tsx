import Image from "next/image"
import Hi from "../components/Hi"
const AboutMe = () => {
  return (
    <div className="h-full w-full  pt-28">
      {/* Presentation and Photo */}
      <div className="flex flex-col md:flex-row items-center justify-center  md:my-28 ">
      <div className='max-w-[800px]  h-full flex flex-col justify-center my-20 px-12'>
        
        <Hi/>
        <h1 className='text-4xl lg:text-7xl font-bold  '>Pascual Flores</h1>
        <h2 className='text-3xl lg:text-7xl  text-gray-400  '>I'm a web developer</h2>
        <p className=' py-4 max-w-[700px] '>24 year old engineer and self taught programmer looking to expand my knowledge as Full Stack Developer. Proficient in languages, communication skills, sense of design and with a strong passion for programming!</p>
        
      </div>
      <Image src="/images/Me.jpg" alt="Pascual Flores Landing Photo" width={500} height={1000} className="md:w-96 md:h-96 w-80 h-80 rounded-xl ml-3" />
      </div>
      {/* Separator Line */}
      <div className="w-full">
        <div className=" h-0.5 mt-28 mx-28 bg-gray-400 mb-10 opacity-30">
      </div>
      </div>
      {/* Curriculum */}
      <div className="w-full h-full min-h-screen flex flex-col md:flex-row  text-xs md:text-sm justify-center gap-12 md:gap-6 items-center md:items-start mb-10 px-28 ">
        {/* Education */}
        <div className="flex flex-col w-48 gap-4 ">
          <h1 className="font-bold font-montse whitespace-nowrap">E D U C A T I O N</h1>
          {/* One education block */}
          <div className="flex flex-col gap-1">
          <p className="font-semibold">Bachelor of Aeronautical Engineering</p>
          <p>Universidad Autonoma de Nuevo Leon</p>
          <p className="italic">2018-2023</p>
          </div>
          <div className="flex flex-col gap-1">
          <p className="font-semibold">Web Development Technician</p>
          <p>Universidad Autonoma de Nuevo Leon</p>
          <p className="italic">2023-2024</p>
          </div>
          <div className="flex flex-col gap-1">
          <p className="font-semibold">Google UX Design Certification</p>
          <p>Online Program</p>
          <p className="italic">Mar 2023 - current</p>
          </div>
        </div>
        
        {/* Experience */}
        <div className="flex flex-col w-48 gap-4">
          <h1 className="font-bold font-montse whitespace-nowrap">E X P E R I E N C E</h1>
          {/* One education block */}
          <div className="flex flex-col gap-1">
          <p className="font-semibold">Web Developer</p>
          <p>Powertrain Ventures</p>
          <p className="italic">Feb 2024 - current</p>
          </div>
          <div className="flex flex-col gap-1">
          <p className="font-semibold">Quality Assurance Intern</p>
          <p>Lear Corporation</p>
          <p className="italic">Feb 2022 - Nov 2022</p>
          </div>
        </div>
        {/* Technical Skills */}
        <div className="flex flex-col w-48 gap-1">
        <h1 className="font-bold font-montse mb-2">S K I L L S</h1>
          <p>Teamwork</p>
          <p>Interpersonal skills</p>
          <p>Design</p>
          <p>Problem solving</p>
          <p>Critical thinking</p>
          <p>Adaptability</p>
          <p>Scrum</p>
          <p>Agile</p>
          

        </div>
        <div className="flex flex-col w-48 gap-1">
        <h1 className="font-bold font-montse mb-2 whitespace-nowrap">T E C H N O L O G I E S</h1>
          <p>React</p>
          <p>Next JS</p>
          <p>Node JS</p>
          <p>Express</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>HTML & CSS3</p>
          <p>Figma</p>
          <p>Tailwind</p>
          <p>SQL</p>
          <p>C#</p>
          <p>C++</p>
          <p>Git</p>
        </div>
        <div className="flex flex-col w-48 gap-1 whitespace-nowrap">
        <h1 className="font-bold font-montse mb-2">H O B B I E S</h1>
          <p>Reading</p>
          <p>Photography</p>
          <p>Music</p>
          <p>Self-learning</p>
          <p>Languages</p>
          <p>Cinema</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
export default AboutMe