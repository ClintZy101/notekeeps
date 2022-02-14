import React from 'react'
import { AiOutlineBulb, AiOutlineBell } from 'react-icons/ai'
import { MdOutlineArchive } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { BsFolder2Open } from 'react-icons/bs'
import { SidebarOptions } from './SidebarOptions'

export const IconToolTips = () => {
    return (
        <div className="fixed bottom-2 text-white bg-yellow-400 p-2">
            <div className="group text-2xl">
                <span className="group-hover:opacity-100 opacity-0 fixed- bottom-5">text</span>
                <AiOutlineBell className="cursor-pointer" />
                
            </div>

        </div>
    )
}
