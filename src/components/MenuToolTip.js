import React from 'react'
import { AiOutlineBulb, AiOutlineBell } from 'react-icons/ai'
import { MdOutlineArchive } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { BsFolder2Open } from 'react-icons/bs'
import { SidebarOptions } from './SidebarOptions'

export const MenuToolTip = () => {
    return (
        <div>
            <div className="flex">
                <AiOutlineBulb />
                <span className>Notes</span>
            </div>
        </div>
    )
}
