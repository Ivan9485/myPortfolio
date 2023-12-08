import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Accordion = (props) => {
  const [data, setData] = useState(props.datas);
    
    const handleToggleActive = () => {
        let activeNew = data.active === 1 ? 0 : 1;
        setData({...data, active : activeNew});
    }
    return (
      <div className={`w-[280px] p-2  bg-white border border-[#c9c6c655] text-black rounded-md mb-2 duration-500 shadow-md group ${data.active === 1 ? 'is-active bg-white' : ''}`}
      >
          <div className="flex items-center">
              <div className=" w-full group-[.is-active]:font-bold">
              {data.question} 
              </div>
              <div className="text-xl rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[270deg]" onClick={handleToggleActive}>
              <IoIosArrowForward size={18}/>
              </div>
          </div>
          <div className="text-sm overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[150px]">
              {data.answer}
          </div>
      </div>
  );
}
export default Accordion