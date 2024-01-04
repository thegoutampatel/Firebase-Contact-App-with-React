import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { useState } from "react";
import useDisclouse from "../hooks/UseDisclouse";

function ContactContainer({contacts}) {

    const { isOpen, onClose, onOpen} = useDisclouse();

    // We made this logic as Custom Hook useDisclouse 

    // const [isOpen, setOpen] = useState(false);
    // const onOpen = () =>{
    //     setOpen(true);
    // };
    // const onClose = () =>{
    //     setOpen(false);
    // };


    const deletContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id))
        } catch (error) {
            console.log("error")
        }
    }

    return (

        <div className="mt-4">
        {
        contacts.map((contact)=>
        <div key={contact.id} className=" bg-yellow flex justify-between items-center  rounded-lg p-2 mb-3"> 
            
            <div className=" flex gap-2">
            <FaUserCircle className=" text-orange text-4xl"/>
            <div>
                <h2 className=" font-medium">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
            </div>
            </div>

            <div className="flex text-3xl">
            <RiEditCircleLine onClick={onOpen} className=" cursor-pointer" />
            <IoMdTrash onClick={()=> deletContact(contact.id)} className=" text-orange cursor-pointer"/>
            </div>
        </div>
        )
        }
        <AddAndUpdateContact contact={contacts} isUpdate isOpen={isOpen} onClose={onClose}/>
        </div>
  )
}

export default ContactContainer