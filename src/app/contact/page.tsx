import BasicForm from "./components/ContactForm"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"
const page = () => {
  return (
    <>
     <Navbar />
    <div className="w-full h-[900px] flex flex-col justify-center items-center py-20">
    <div className="w-full justify-center flex">
      <h1 className="text-center md:text-2xl font-montse py-8">Feel free to send me a message, let&apos;s collaborate!</h1>
    </div>
      <div className="flex flex-col md:flex-row items-center gap-2">
        <div className="">
          <Image src={"/images/PWeb.png"} alt="Pascual Flores Logo with description" width={450} height={450} className="w-[200px] md:w-[400px]"/>
        </div>
        <div className="">
          <BasicForm />
        </div>
    </div>
    </div>
    <Footer />
    </>
  )
}
export default page