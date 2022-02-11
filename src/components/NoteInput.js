import React, { useRef, useState,useEffect } from 'react'
import { BsCardImage } from 'react-icons/bs'
import { BiPaint } from 'react-icons/bi'
import { GoTasklist } from 'react-icons/go'
export const NoteInput = () => {
    const [isOpen, setIsOpen] = useState(false)
    function openNoteInput () {
        console.log('click')
        setIsOpen(true);
    }

    const noteEl = useRef()

    const handleClick = e => {
        if (noteEl.current.contains(e.target)) {
          console.log('click', e.target)
        } 
        else{ return setIsOpen(false)}
      };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);
  
    return (
        <div className="border rounded-lg  shadow-md   ml-20 mr-5 mt-3  px-4"
        ref={noteEl}
        onClick={handleClick}
        >
            <div className={`flex space-x-2 items-center  relative ${isOpen && 'grid'}`}>
                <input type="text" placeholder={`${isOpen ? 'Title' : 'Take a Note'}`} className="outline-none my-2 flex-grow"
                onClick={()=> openNoteInput()}
                />
                {
                    isOpen && <input contenteditable="true" placeholder="Take a Note" className="outline-none"></input>
                }
                <span className={`flex space-x-5 text-gray-500  ${isOpen ? 'relative justify-center my-3' : 'absolute right-2 '} `}>
                    <BsCardImage  className="cursor-pointer hover:text-gray-800"/>
                    <GoTasklist  className="cursor-pointer hover:text-gray-800"/>
                    <BiPaint className="cursor-pointer hover:text-gray-800"/>
                </span>
            </div>

        </div>
    )
}
