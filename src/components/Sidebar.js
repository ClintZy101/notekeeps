import React, { useState, useCallback, useEffect } from 'react'
import { AiOutlineBulb, AiOutlineBell } from 'react-icons/ai'
import { MdOutlineArchive } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { SidebarOptions } from './SidebarOptions'

export const Sidebar = ({showSideBarText}) => {

    return (
        <div className={`grid gap-2 pt-3 w-max px-2  text-gray-500 group fixed overflow-hidden ${showSideBarText === true ? 'bg-white' : null} `}>
            <SidebarOptions Icon={AiOutlineBulb} text="Notes" showSideBarText={showSideBarText}/>
            <SidebarOptions Icon={AiOutlineBell} text="Reminders" showSideBarText={showSideBarText}/>
            <SidebarOptions Icon={MdOutlineArchive} text="Archive" showSideBarText={showSideBarText}/>
            <SidebarOptions Icon={BsTrash} text="Trash" showSideBarText={showSideBarText}/>
            <SidebarOptions Icon={AiOutlineBulb} text="Ideas" showSideBarText={showSideBarText}/>
        </div>
    )
}
