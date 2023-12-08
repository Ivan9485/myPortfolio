import Laravel from "../../assets/laravel.svg"
import React from "../../assets/react.png"
import Typescript from "../../assets/Typescript.svg"
import Matlab from "../../assets/Matlab.png"


const Technologies = ({type,size}) => {
  return (
    <p className="px-2">
      {
        type==="Laravel" && (
          <p className=" flex items-centers text-red-500"> Laravel 
          <img className={size} src={Laravel} alt="Laravelimg" />
          </p>
        )
      }
      {
        type==="React" && (
          <p className=" flex items-center text-sky-400"> React 
          <img className={size} src={React} alt="Reactimg" />
          </p>
        )
      }
      {
        type==="Typescript" && (
          <p className=" flex items-center text-cyan-600"> Typescript 
          <img className={size} src={Typescript} alt="Typescript  img" />
          </p>
        )
      }
      {
        type==="Matlab" && (
          <p className=" flex items-centers text-[rgb(0,85,153)]"> Matlab 
          <img className={size} src={Matlab} alt="Matlabimg" />
          </p>
        )
      }
    </p>
  )
}
export default Technologies