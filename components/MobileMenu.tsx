import React, { useContext, useEffect, useState } from "react";
import { SideBarContext } from "./SidebarContext";

function MobileMenu() {

    const { showSide, setShowSide } = useContext(SideBarContext)

    function toggleSideBarState() {
        if (!showSide) {
            setShowSide(true);
        }
    }

    return (
        <div className="bg-[#202123] text-white flex justify-between md:hidden" >
            <h1 className="p-4 font-bold text-xl">ChatGPT Plus Messenger</h1>
            <button onClick={toggleSideBarState} className="mobile-menu-button p-4 hover:outline-none hover:bg-gray-700/50">
                {!showSide ? (
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg >) : (
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>)}
            </button>
        </div >
    )
}

export default MobileMenu