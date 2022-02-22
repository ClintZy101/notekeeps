
import React, { useRef, useState, useEffect } from 'react'
import { BsCardImage, BsPin } from 'react-icons/bs'
// import { BiPaint } from 'react-icons/bi'
import { GoTasklist } from 'react-icons/go'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { BsBell } from 'react-icons/bs'


export const NoteInput = () => {
  const [isOpen, setIsOpen] = useState(false)
  function openNoteInput() {
    console.log('click')
    setIsOpen(true);
  }

  const noteEl = useRef()

  const handleClick = e => {
    if (noteEl.current.contains(e.target)) {
      console.log('click', e.target)
    }
    else { return setIsOpen(false) }
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
    <div className="w-72 sm:w-80 md:w-96 mx-auto">
      <div className="border rounded-lg  shadow-md  mx-auto mt-3  px-4 w-full sm:max-w-md"
        ref={noteEl}
        onClick={handleClick}
      >
        <div className={`flex space-x-2 items-center  relative ${isOpen && 'grid'}`}>

          <div className={` flex items-center space-x-2 `}>
            <input type="text" placeholder={`${isOpen ? 'Title' : 'Take a Note'}`} className={`${isOpen === false ? '' :''} outline-none rounded flex-grow w-full my-2 px-2  `}  
              onClick={() => openNoteInput()}
            />  
            <span className={`${isOpen ? 'flex': 'hidden' } p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full group`}>
            <BsPin className=" group-hover:text-black text-gray-500  transition delay-300" /> 
              </span> 
                  
          </div>

          {
            isOpen && <textarea style={{ resize: 'none' }} contenteditable="true" placeholder="Take a Note" className="outline-none rounded px-2 "></textarea>
          }
          <div className="flex items-center justify-between my-2">
            <div className={`flex space-x-5 text-gray-500  ${isOpen ? 'relative justify-center my-3  ' : 'absolute right-2 '} `}>
              <BsCardImage className="cursor-pointer hover:text-yellow-500" />
              <GoTasklist className="cursor-pointer hover:text-yellow-500" />
              {/* <BiPaint className="cursor-pointer hover:text-black"/> */}
              <IoColorPaletteOutline className="cursor-pointer hover:text-yellow-500" />
              <BsBell className="cursor-pointer hover:text-yellow-500" />
            </div>
            <div className={` ${isOpen ? 'p-2 px-3 cursor-pointer font-sans text-gray-500 transition delay-300 hover:bg-gray-100 hover:text-black rounded' : 'hidden'} `}>
              <h2>Keep Note </h2>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
