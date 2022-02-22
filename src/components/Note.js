import React from 'react'
import { BsCardImage, BsCloudFill } from 'react-icons/bs'
import { GoTasklist } from 'react-icons/go'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { BsBell } from 'react-icons/bs'
import { BsFillPinFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'
import { BsCloudCheckFill } from 'react-icons/bs'

export const Note = ({ noteModalIsOpen, handleNoteModal, title, content, id }) => {

    function truncateContent(data) {
        if (data.length > 220) {
            const trunc = data.substring(0, 220) + '...'
            return trunc
        } else return data
    }
    function truncateTitle(data) {
        if (data.length > 30) {
            const trunc = data.substring(0, 30) + '...'
            return trunc
        } else return data
    }

    return (

        <div className="border shadow-sm w-full md:w-64 mx-auto gap-2   rounded-md grid  relative group hover:shadow-lg px-3 h-80 "
            onClick={handleNoteModal}
        >
            <span>
                <BsFillCheckCircleFill className="text-blue-500 text-xl absolute -left-2 -top-2 opacity-0 group-hover:opacity-100 transition delay-300" />
            </span>
            <span>
                <BsFillPinFill className="text-gray-500  opacity-0 group-hover:opacity-100 transition delay-300 absolute top-2 right-3 " />
            </span>

            <div className=" absolute  p-3 overflow-x-hidden">
                <div className="flex  items-center justify-between    w-full  ">
                    <h1>{title}</h1>
                    {/* <h1 className="text-center font-medium border">{truncateTitle(title)} </h1> */}
                </div>
                <div className="overflow-y-auto  mt-2">
                <p className="font-light whitespace-normal">{truncateContent(content)}</p>
            </div>
            </div>

          


            <div className={`flex space-x-5 text-gray-500 opacity-0 group-hover:opacity-100 transition delay-300 absolute bottom-0 w-full justify-evenly bg-yellow-100 p-2 `}>
                <BsCardImage className="cursor-pointer hover:text-black" />
                <GoTasklist className="cursor-pointer hover:text-black" />
                {/* <BiPaint className="cursor-pointer hover:text-black"/> */}
                <IoColorPaletteOutline className="cursor-pointer hover:text-black" />
                <BsBell className="cursor-pointer hover:text-black" />
                <BsTrash className="cursor-pointer hover:text-black" />
            </div>
        </div>

    )
}
