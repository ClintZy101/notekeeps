import React, {useState} from 'react'



export const SidebarOptions = ({ Icon, text, showSideBarText }) => {
   
    return (
        <div  className="flex items-center cursor-pointer  px-4  p-2 rounded-full space-x-10 tracking-widest hover:bg-yellow-100  mr-3 group z-50"
        >
            <div 
            >
            <Icon className="text-2xl text-gray-500 active:bg-yellow-400"/>
            </div>
            
            <span className={`${showSideBarText === true ? 'flex' : 'hidden'} `}> {text} </span>
           
           
        </div>
    )
}
