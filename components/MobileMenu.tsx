"use client"

import React, { useState } from "react";

function MobileMenu() {

    const [showSide, setShowSide] = useState(false);

    React.useEffect(() => {
        const btn = document.querySelector(".mobile-menu-button");
        const sidebar = document.querySelector(".sidebar");

        function toggleSideBar() {
            setShowSide(showSide => !showSide);
            sidebar?.classList.toggle("-translate-x-full");
        }

        btn?.addEventListener("click", toggleSideBar);

        return function () {
            btn?.removeEventListener("click", toggleSideBar);
        }

    }, [showSide])

    return (
        <div className="bg-[#202123] text-white flex justify-between md:hidden" >
            <h1 className="p-4 font-bold">ChatGPT Plus Messenger</h1>
            <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700/50">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg >
            </button>
        </div >
    )
}

export default MobileMenu