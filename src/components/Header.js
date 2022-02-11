import React, { useState, useCallback, useEffect } from 'react'
import { FiMenu } from 'react-icons/fi'
import { BiCog } from 'react-icons/bi'
import { BsPerson, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { Searchbar } from './Searchbar';




export const Header = ({ handleSideBarText }) => {


    const [searchBar, setsearchBar] = useState(false);

    const handleSearchModal = useCallback(() => {
        setsearchBar(!searchBar);
    }, [searchBar]);



    return (
        <div className="sticky top-0 flex items-center  p-1  z-50  shadow-md text-gray-500 justify-between bg-white">
            <div className="flex items-center space-x-2   ">
                <div className="md:text-3xl cursor-pointer    transform transition duration-500  rounded-full p-3 hover:bg-yellow-100"
                    onClick={handleSideBarText}
                >
                    <FiMenu
                    />
                </div>

                <div>
                    <img src="images/Idyeas.png" alt="" width="50" height="50" />
                </div>

                <Link to="/">
                    <h1 className="md:text-2xl text-lg">Idyeas</h1>
                </Link>

            </div>
            {/* Search Bar */}

            <form action="" className=" items-center space-x-2 bg-gray-100 px-2 w-80 hidden md:flex rounded-lg transform transition duration-500 ">
                <BsSearch />
                <input type="text" placeholder="Search Notes" className="h-10 pl-2 w-full flex-1 outline-none bg-transparent" />
            </form>


            {searchBar ? <Searchbar handleSearchModal={handleSearchModal} /> : null}

            <div className="flex items-center md:space-x-5 space-x-3">

                <div className="md:text-2xl  md:p-3 md:opacity-0 text-lg  cursor-pointer hover:bg-yellow-100 rounded-full p-2 transform transition duration-500 flex items-center"
                    onClick={handleSearchModal}
                >
                    <BsSearch />
                </div>


                <div className="md:text-2xl text-lg  cursor-pointer hover:bg-yellow-100 rounded-full md:p-3 p-2 transform transition duration-500"
                >
                    <BiCog />
                </div>
                <div className="md:text-2xl text-lg  cursor-pointer hover:bg-yellow-100 rounded-full md:p-3 p-2 transform transition duration-500"
                >
                    <BsPerson />
                </div>
            </div>

        </div>
    )
}
