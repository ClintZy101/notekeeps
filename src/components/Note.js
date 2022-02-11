import React from 'react'
import { BsCardImage, BsCloudFill } from 'react-icons/bs'
// import { BiPaint } from 'react-icons/bi'
import { GoTasklist } from 'react-icons/go'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { BsBell } from 'react-icons/bs'
import { BsFillPinFill } from 'react-icons/bs'
import { BsCloudCheckFill } from 'react-icons/bs'

export const Note = () => {
    return (
        <div className="border shadow-md w-72 p-3 rounded-md grid gap-2 relative">
            <span>
                <BsCloudCheckFill className="text-blue-500 text-xl absolute -left-1 -top-2" />
            </span>
            <span>
                <BsFillPinFill className="text-green-500 absolute right-2  " />
            </span>
        <h1 className="text-center font-medium">Title</h1>
        <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illum ipsa unde commodi ducimus voluptate consequuntur totam consequatur mollitia est minus doloremque suscipit fugit cupiditate repellat quam sapiente voluptatem. Enim!</p>
        
        <div className={`flex space-x-5 text-gray-500 my-2  mx-auto`}>
            <BsCardImage className="cursor-pointer hover:text-black" />
            <GoTasklist className="cursor-pointer hover:text-black" />
            {/* <BiPaint className="cursor-pointer hover:text-black"/> */}
            <IoColorPaletteOutline className="cursor-pointer hover:text-black" />
            <BsBell className="cursor-pointer hover:text-black" />
          </div>
    </div>
    )
}
