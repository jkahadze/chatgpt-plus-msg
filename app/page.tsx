"use client"

import React, { useContext } from 'react'
import MobileMenu from '../components/MobileMenu'
import { SideBarContext, SidebarContextProvider } from '../components/SidebarContext'

function HomePage() {

    const { showSide, setShowSide } = useContext(SideBarContext)

    function exitSideBar() {
        if (showSide) {
            setShowSide(false);
        }
    }

    return (
        <div onClick={exitSideBar} className='flex flex-col min-h-fill md:h-screen'>

            <MobileMenu />

            <div className="flex flex-col items-center justify-center px-10 text-white my-auto">

                <h1 className="pb-10 text-5xl font-bold text-center">ChatGPT Plus Messenger</h1>

                <div className='flex text-center'>
                    <p>ChatGPT with some extra features.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage