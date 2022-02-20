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
        if (data.length > 20) {
            const trunc = data.substring(0, 20) + '...'
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

            <div className="grid">
                <div className="flex  items-center justify-between  absolute top-2   w-full  ">
                    <h1 className="text-center font-medium ">{title} </h1>

                    <span>
                        <BsFillPinFill className="text-gray-500  opacity-0 group-hover:opacity-100 transition delay-300 absolute top-1 right-5" />
                    </span>
                </div>
            </div>

            <div className="overflow-y-auto -mt-3">
                <p className="font-light">{truncateContent(content)}</p>
            </div>


            <div className={`flex space-x-5 text-gray-500 my-2 opacity-0 group-hover:opacity-100 transition delay-300 absolute bottom-2 w-full justify-evenly`}>
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
