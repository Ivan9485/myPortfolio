import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutMe from "./views/AboutMe";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="">
      <div >
        <Navbar />
        <AboutMe />
        <Footer />
      </div>

    </div>
  );
}
