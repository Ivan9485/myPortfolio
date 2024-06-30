'use client'
import Link from "next/link";
import projects from "../../data/projects.json";
import { FaArrowLeftLong, FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";
import Modal from "@/app/components/Modal";

const Page = ({ params }: { params: { id: string } }) => {
  const project = projects.find((project) => {
    // Logging to see if the id is being passed correctly
    // console.log(project.id, Number(params.id));
    return project.id === Number(params.id)
  });
  const [open, setOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState('')
  const { id, what, how, why, tech, photos, demo } = project || {};
  return (
    <>
    <Navbar />
    <div className="pt-28">
      {
        project ? (<div key={id} className="">
        <div className="flex md:flex-col  justify-center  text-sm gap-5 font-noto flex-wrap">
          <div className="md:fixed start-12 top-1/2 pl-6  w-full">
            <Link href="/projects">
              <div className="flex items-center gap-2 py-4">
                <FaArrowLeftLong />
                <p>Back</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap gap-5 justify-center ">
          <div className="w-[250px]">
            <h1 className="text-bl">What</h1>
            <p className="text-gray-600 text-xs mt-2">{what}</p>
          </div>
          <div className="w-[250px]">
            <h1 className="text-bl">How</h1>
            <p className="text-gray-600 text-xs mt-2">{how}</p>
          </div>
          <div className="w-[250px]">
            <h1 className="text-bl">Why</h1>
            <p className="text-gray-600 text-xs mt-2">{why}</p>
          </div>
          <div className="w-[250px]">
            <h1 className="text-bl">Tech</h1>
            <p className="text-gray-600 text-xs mt-2">
              {tech && tech.join(", ")}
            </p>
          </div>
          </div>
        </div>
        <hr className="md:mx-12 my-12" />
        {/* Images section */}
        <div className="flex justify-center">
          
        <div className=" grid grid-cols-1 lg:grid-cols-2 w-full md:w-5/6 px-6 md:px-20 gap-6 justify-center ">
          { photos && photos.map((photo, id) => {
            return (
              <div key={id}>
              <Image
                onClick={()=>{setSelectedPhoto(photo); setOpen(true)}}
                className="shadow-sm min-w-[300px] sm:w-[600px] h-full rounded-sm object-cover cursor-pointer"
                src={photo}
                width={500}
                height={500}
                alt="Project photo"
              />
              </div>
            );
          })}
        </div>
        </div>
        <Modal open={open} onClose={()=>setOpen(false)}>
        <div>
        <Image
        src={selectedPhoto}
        alt={selectedPhoto || "Product Image"}
        width={1000}
        height={1000}
        className="w-full h-full object-cover "
      />
      </div>
      
    </Modal>
      </div>) : <h1>Project not found</h1>
      }
    </div>
    {
            demo && (
                <div className="w-full flex justify-center">
                <Link href={demo} target="_blank" className="bg-[#00BF63] text-white p-4 rounded-md shadow-md flex w-[200px] gap-2 justify-center font-montse">
                 <p >Get the code</p>
                <FaGithub className="w-6 h-6 hover:text-[#00BF63] hover:cursor-pointer" />
                </Link>
                </div>
            )
          }
    <Footer />
    
    </>
  );
};
export default Page;
