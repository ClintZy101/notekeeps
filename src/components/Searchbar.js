import React from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi';


export const Searchbar = ({handleSearchModal}) => {
    return (
        <div className="flex items-center absolute top-0 mt-2  left-2   text-gray-500 rounded lg:opacity-0  transform transition duration-500 bg-gray-100">
            <span className="p-1 cursor-pointer hover:bg-gray-200 mx-2 text-gray-500 rounded-full"
            onClick={handleSearchModal}
            >
            <BiLeftArrowAlt className=" text-2xl"/>
            </span>
            <input type="text" placeholder="Search Notes" className="bg-transparent outline-none h-10 sm:w-96" />

            {/* <span className="p-2 cursor-pointer hover:bg-gray-200 mx-2 text-gray-500 rounded-full">
            <GrClose className=""/>
            </span> */}
        </div>
    )
}
