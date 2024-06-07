import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import projects from "../data/projects.json"
import Image from "next/image"
import Link from "next/link"

interface ProjectInterface {
  id: number,
  name: string,
  thumbnail: string,
  photos: string[],
  tech: string[],
  what: string,
  why: string,
  how: string,
  demo: string
}

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full pt-40 flex flex-wrap gap-16 px-28 justify-center">
        {
          projects.map((project:ProjectInterface, id: number)=>{
            return (
              <Link href={`/projects/${id}`} key={id}>
              <div className="md:w-[600px] md:h-[350px] w-full h-80">
                <Image src={project.thumbnail} width={500} height={500} alt="" className=" w-full h-full rounded-sm shadow-sm" />
                <h1 >{project.name}</h1>
              </div>
              </Link>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}
export default page