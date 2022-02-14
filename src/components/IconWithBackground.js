import React from 'react'

export const IconWithBackground = ({Icon}) => {
    return (
        <div className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200">
            <Icon className="text-xl text-gray-500 "/>
        </div>
    )
}
