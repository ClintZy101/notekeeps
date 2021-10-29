import React from 'react'
import { BsCardImage } from 'react-icons/bs'
export const NoteInput = () => {
    return (
        <div className="border border-gray-500 shadow-md w-max ml-20">
            <div className="flex">
                <input type="text" />
                <span>
                    <BsCardImage />
                </span>
            </div>

        </div>
    )
}
