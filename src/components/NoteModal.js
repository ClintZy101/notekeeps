import React, { useState } from 'react'
import { BsPin } from 'react-icons/bs'
import { IconWithBackground } from './IconWithBackground'
import { BsCardImage, BsCloudFill } from 'react-icons/bs'
import { GoTasklist } from 'react-icons/go'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { BsBell } from 'react-icons/bs'
import { BsFillPinFill } from 'react-icons/bs'
import { BsCloudCheckFill } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'

export const NoteModal = ({ noteModalIsOpen, handleNoteModal }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <div className={`${noteModalIsOpen ? 'block' : 'hidden'}`}>
            {/* Modal */}
            <div className="border bg-white w-full  sm:w-8/12 sm:h-4/6 h-4/5 sm:inset-32 mx-auto   left-0 top-20 sm:top-32  fixed z-50 rounded-lg p-3 ">


                <div className=" p-2  h-5/6 ">
                    <div className="flex items-center justify-between  text-2xl mb-1">
                        <input type="text" placeholder="Title" className="flex-grow outline-none"/>
                        <IconWithBackground Icon={BsPin} />
                    </div>
                        <textarea style={{ resize: 'none', overflow: 'auto' }} className="h-full w-full outline-none mb-2 ">How can you discern whether a person is spiritual or a hypocrite or a fraud?
                        It is not by the things he or she knows. It is not how precise and how much biblical knowledge or theology he or she knows. The test of true spirituality is Character. Do you see maturity and more of the fruits of the Spirit in his or her life? When you walk with him or her, are you blessed and encouraged to live more like Christ or to desire more of Him. Are the truths he or she shares, seen on his or her life?

                        The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control; against such things, there is no law. - Gal 5:22-23

                        How can you discern whether a person is spiritual or a hypocrite or a fraud?
                        It is not by the things he or she knows. It is not how precise and how much biblical knowledge or theology he or she knows. The test of true spirituality is Character. Do you see maturity and more of the fruits of the Spirit in his or her life? When you walk with him or her, are you blessed and encouraged to live more like Christ or to desire more of Him. Are the truths he or she shares, seen on his or her life?

                        The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control; against such things, there is no law. - Gal 5:22-23
                    </textarea>

                </div>


                <div className="text-gray-500 flex items-center bottom-2 absolute space-x-5 p-2">
                    <BsCardImage className="cursor-pointer hover:text-black" />
                    <GoTasklist className="cursor-pointer hover:text-black" />
                    {/* <BiPaint className="cursor-pointer hover:text-black"/> */}
                    <IoColorPaletteOutline className="cursor-pointer hover:text-black" />
                    <BsBell className="cursor-pointer hover:text-black" />
                    <BsTrash className="cursor-pointer hover:text-black" />
                </div>
                <button className="bottom-2 right-4 absolute hover:bg-gray-200 rounded p-2" onClick={handleNoteModal}>Close </button>
            </div>
            {/* Background */}
            <div className="bg-black opacity-40 h-screen w-screen top-0 right-0 z-40 fixed"
                onClick={handleNoteModal}
            ></div>
        </div>
    )
}

