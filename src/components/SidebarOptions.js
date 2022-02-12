import React, {useState} from 'react'



export const SidebarOptions = ({ Icon, text, showSideBarText }) => {
   
    return (
        <div  className="flex items-center group cursor-pointer  transform duration-200  transition  ease-out delay-200  p-2 rounded-full space-x-5 tracking-widest bg-white group hover:translate-x-2 hover:bg-yellow-100 group mr-3" 
        >
            <Icon className="text-2xl text-gray-500 "/>
            <span className={`${showSideBarText=== true ? 'flex' : 'hidden'}`}> {text} </span>
        </div>
    )
}
