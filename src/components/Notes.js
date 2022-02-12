import React from 'react'
import { Note } from './Note'

export const Notes = () => {
    return (
        <div className=" w-full  ">

            {/* Notes Gallery */}
            <div className="mx-auto ">
                <div className="">
                    <h1>Pinned</h1>
                </div>
                <div className="gap-3 p-3 flex flex-wrap ">
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                </div>
            </div>

        </div>
    )
}

