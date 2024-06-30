import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}


const Modal = ({open, onClose, children}: ModalProps) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
      
    {/* Modal */}
    <div 
   onClick={(e)=> e.stopPropagation()} 
   className={`bg-white rounded-xl shadow p-6 transition ${open ? "scale-100 opacity-100 w-full md:w-2/3 md:p-22 " : "scale-0 opacity-0"}`}>

      <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg bg-white">
        <RxCross2
          size={20}/>
      </button>
    {children}
    </div>

    </div>
  )
}
export default Modal