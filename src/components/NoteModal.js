import React from 'react'
import { BsPin } from 'react-icons/bs'
import { IconWithBackground } from './IconWithBackground'

export const NoteModal = () => {
    return (
        <div className="">
            {/* Modal */}
            <div className="border bg-white   sm:w-8/12 sm:h-3/5 sm:inset-32 mx-auto  w-full left-0 top-32 h-3/5 fixed z-50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                <h1>Title</h1>
                <IconWithBackground Icon={BsPin} />
                </div>
                
                <p>paragraph</p>
            </div>
            {/* Background */}
            <div className="bg-black opacity-40 h-screen w-screen top-0 right-0 z-40 fixed"></div>
        </div>
    )
}

