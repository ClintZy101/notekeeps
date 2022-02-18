import React, { useState, useCallback, useEffect, useRef } from 'react'
import { AiOutlineBulb, AiOutlineBell } from 'react-icons/ai'
import { MdOutlineArchive } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { BsFolder2Open } from 'react-icons/bs'
import { SidebarOptions } from './SidebarOptions'

export const Sidebar = ({ showSideBarText, handleSideBarText }) => {

    return (

        <div
        className=""
            onClick={handleSideBarText}
        >
            <div className={`h-screen  flex-col gap-5  pt-3  px-2  text-gray-500   overflow-hidden z-50  transform duration-200  transition  ease-out delay-200 mt-0  md:mt-3 ${showSideBarText === true ? 'fixed top-12 bg-white ' : null} `}
            >

                <SidebarOptions
                className=""
                 Icon={AiOutlineBulb} text="Notes" showSideBarText={showSideBarText} />

                <SidebarOptions Icon={AiOutlineBell} text="Reminders" showSideBarText={showSideBarText} />
                <SidebarOptions Icon={BsFolder2Open} text="Ideas" showSideBarText={showSideBarText} />
                <SidebarOptions Icon={MdOutlineArchive} text="Archive" showSideBarText={showSideBarText} />


                <SidebarOptions Icon={BsTrash} text="Trash" showSideBarText={showSideBarText} />
            </div>

            <div className={`${showSideBarText === true ? 'fixed ' : 'hidden'} h-full w-screen  top-0 right-0  transform duration-200  transition  ease-out delay-200 bg-black opacity-40 z-30 `}
            />


        </div>
    )
}
