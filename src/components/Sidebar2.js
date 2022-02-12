import React, { useState, useCallback, useEffect, useRef } from 'react'
import { AiOutlineBulb, AiOutlineBell } from 'react-icons/ai'
import { MdOutlineArchive } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { SidebarOptions } from './SidebarOptions'

export const Sidebar2 = ({ showSideBarText, handleSideBarText }) => {
    // const [isOpen, setIsOpen] = useState(false)

    return (

        <div 
        className={``}
        >
            <div className={`grid gap-2 pt-3 w-max px-2  text-gray-500 group fixed overflow-hidden z-50 mt-2  ${showSideBarText === true ? 'bg-white' : null} `}
            onClick={handleSideBarText}
            >
                <SidebarOptions Icon={AiOutlineBulb} text="Notes" showSideBarText={showSideBarText} />
                <SidebarOptions Icon={AiOutlineBell} text="Reminders" showSideBarText={showSideBarText} />
                <SidebarOptions Icon={MdOutlineArchive} text="Archive" showSideBarText={showSideBarText} />
                <SidebarOptions Icon={BsTrash} text="Trash" showSideBarText={showSideBarText} />
                <SidebarOptions Icon={AiOutlineBulb} text="Ideas" showSideBarText={showSideBarText} />
            </div>
            <div className={`${showSideBarText === true ? 'fixed ' : 'hidden' } h-full w-screen  top-0 right-0   bg-black opacity-40 z-40 `}
            onClick={handleSideBarText}
            />
        </div>
    )
}