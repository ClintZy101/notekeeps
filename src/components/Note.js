import React from 'react'
import { BsCardImage, BsCloudFill } from 'react-icons/bs'
import { GoTasklist } from 'react-icons/go'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { BsBell } from 'react-icons/bs'
import { BsFillPinFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { BsCloudCheckFill } from 'react-icons/bs'

export const Note = ({noteModalIsOpen, handleNoteModal}) => {
    return (
        <div className="border shadow-sm w-full md:w-64 mx-auto gap-2   rounded-md grid  relative group hover:shadow-lg px-3 "
        onClick={handleNoteModal}
        >
            <span>
                <BsFillCheckCircleFill className="text-blue-500 text-xl absolute -left-2 -top-2 opacity-0 group-hover:opacity-100 transition delay-300" />
            </span>
            <span>
                <BsFillPinFill className="text-gray-500 absolute right-2  opacity-0 group-hover:opacity-100 transition delay-300" />
            </span>
        <h1 className="text-center font-medium">Title</h1>
        <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum ipsa unde commodi ducimus voluptate consequuntur totam consequatur mollitia est minus doloremque suscipit fugit cupiditate repellat quam sapiente voluptatem. Enim!</p>
        
        <div className={`flex space-x-5 text-gray-500 my-2 mx-auto opacity-0 group-hover:opacity-100 transition delay-300`}>
            <BsCardImage className="cursor-pointer hover:text-black" />
            <GoTasklist className="cursor-pointer hover:text-black" />
            {/* <BiPaint className="cursor-pointer hover:text-black"/> */}
            <IoColorPaletteOutline className="cursor-pointer hover:text-black" />
            <BsBell className="cursor-pointer hover:text-black" />
          </div>
    </div>
    )
}
