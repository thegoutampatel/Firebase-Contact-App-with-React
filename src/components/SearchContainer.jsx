import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
function SearchContainer({onOpen}) {
  return (
    <div className="flex items-center gap-2">
        <div className="flex relative items-center flex-grow">
          <FaSearch className="text-white text-1xl absolute ml-2 "/>
            <input type="text" placeholder="Search Contact" className=" bg-transparent border border-white rounded-md h-10 flex-grow pl-8 text-white" />
          </div>
        <div>
          <FaCirclePlus onClick={onOpen} className="text-4xl text-white gap-3 cursor-pointer"/>
        </div>
      </div>
  )
}

export default SearchContainer