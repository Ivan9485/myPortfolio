import Laravel from "../../assets/laravel.svg"
import React from "../../assets/react.png"
import Typescript from "../../assets/typescript.svg"


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
    </p>
  )
}
export default Technologies