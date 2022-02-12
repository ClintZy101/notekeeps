import React, { useState, useCallback, useEffect, useRef } from 'react'
import { AiOutlineBulb, AiOutlineBell } from 'react-icons/ai'
import { MdOutlineArchive } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { SidebarOptions } from './SidebarOptions'

export const Sidebar = ({ showSideBarText, handleSideBarText }) => {

    return (

        <div 
        onClick={handleSideBarText}
        >
            <div className={`border  h-screen flex-col gap-5  pt-3  px-2  text-gray-500   overflow-hidden z-50 transition  ease-out delay-200  ${showSideBarText === true ? 'fixed top-16 bg-white w-96' : 'null'} `}
            >
                <div className="group">
                <SidebarOptions Icon={AiOutlineBulb} text="Notes" showSideBarText={showSideBarText}  />
                <span className="opacity-0 group-hover:opacity-100 ">Ideas</span>
                </div>
               
                <SidebarOptions Icon={AiOutlineBell} text="Reminders" showSideBarText={showSideBarText} />
                <SidebarOptions Icon={MdOutlineArchive} text="Archive" showSideBarText={showSideBarText} />
                <SidebarOptions Icon={BsTrash} text="Trash" showSideBarText={showSideBarText} />
                <SidebarOptions Icon={AiOutlineBulb} text="Ideas" showSideBarText={showSideBarText} />
            </div>
            <div className={`${showSideBarText === true ? 'fixed ' : 'hidden' } h-full w-screen  top-0 right-0 transition  ease-out delay-200   bg-black opacity-40 z-30 `}
            />


        </div>
    )
}
