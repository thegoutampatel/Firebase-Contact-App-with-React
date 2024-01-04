import { Children, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { collection, getDocs} from "firebase/firestore";
import {db} from './config/firebase.jsx'
import ContactContainer from "./components/ContactContainer.jsx";
import SearchContainer from "./components/SearchContainer.jsx";
import Modal from "./components/Modal.jsx";
import AddAndUpdateContact from "./components/AddAndUpdateContact.jsx";
import useDisclouse from "./hooks/UseDisclouse.jsx";
function App() {

const [contacts, setContacts] = useState([]);

const { isOpen, onClose, onOpen} = useDisclouse();
// const [isOpen , setIsOpen] = useState(false);

// const onOpen = () =>{
//   setIsOpen(true);
// }

// const onClose = () =>{
//   setIsOpen(false);
// }

useEffect(()=>{

  const getContacts = async ()=>{
      try {
        const contactsRef = collection(db, "contacts");

        const contactsSnapshot = await getDocs(contactsRef);

        const contactList = contactsSnapshot.docs.map((doc)=> {
          return{
            id:doc.id,

            ...doc.data()
          }
        });

        setContacts(contactList);


      } catch (error) {

      }
  }; 

  getContacts();

},[]);

  return (
    <div className="max-w-[370px] mx-auto px-4">
      <NavBar/>
      <SearchContainer onOpen={onOpen}/>
      <ContactContainer contacts={contacts} />
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
    </div>
  )
}

export default App