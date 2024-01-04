import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";

function Modal({onClose, isOpen, children}) {

  return createPortal(
    <>
       {
        isOpen && (
            <>
                <div className=" m-auto  relative z-50 p-4 min-h-[200px] max-w-[80%] bg-white">
                    <div className="flex justify-end">
                        <MdOutlineClose onClick={onClose} className="text-2xl cursor-pointer" />
                    </div>

                    {/* This is Childern which is return in App Component */}
                    {children}
                </div>
                <div onClick={onClose} className="backdrop-blur h-screen w-screen absolute top-0 z-40"/>
            </>
        ) 
       }
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal