import React from 'react'
import { Note } from './Note'

export const Notes = () => {
    return (
        <div className=" w-full mx-auto ">

            {/* Notes Gallery */}
            <div>
                <div className="ml-4">
                    <h1>Pinned</h1>
                </div>
                <div className="gap-3 p-3 flex flex-wrap ">
                    <Note />
                    <Note />
                    <Note />
                </div>
            </div>

        </div>
    )
}

