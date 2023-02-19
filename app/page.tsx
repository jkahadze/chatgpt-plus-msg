"use client"

import React, { useContext } from 'react'
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
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
        <div onClick={exitSideBar} className='flex flex-col'>

            <MobileMenu />

            <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
                <h1 className="text-5xl font-bold mb-20">ChatGPT Plus Messenger</h1>
                <div className='flex space-x-2 text-center'>
                    <p className='-m-10'>ChatGPT with some extra features.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage