import React, {useState} from 'react'


export const SidebarOptions = ({ Icon, text, showSideBarText }) => {
   
    return (
        <div  className="flex items-center group cursor-pointer hover:bg-yellow-100 p-2 pr-4 rounded-r-full space-x-5 tracking-widest"
        // onMouseEnter={}
        >
            <Icon className="text-2xl " />
            <span className={`  transition transform duration-500`}>{showSideBarText === true ? text : null}</span>
        </div>
    )
}
