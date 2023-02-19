"use client"

import { createContext, useEffect, useMemo, useState } from "react";

type SideBarContextType = {
    showSide: boolean,
    setShowSide: (showSide: any) => void,
};

const SideBarContextDefaultValue = {
    showSide: false,
    setShowSide: (showSide: any) => void 0,
};

export const SideBarContext = createContext<SideBarContextType>(SideBarContextDefaultValue);

export function SidebarContextProvider({
    children,
}: {
    children: React.ReactNode
}) {

    const [showSide, setShowSide] = useState(false);

    useEffect(() => {
        const sidebar = document.querySelector(".sidebar");
        sidebar?.classList.toggle("-translate-x-full");
    }, [showSide])

    return (
        <SideBarContext.Provider value={{ showSide, setShowSide }}>
            {children}
        </SideBarContext.Provider>
    )

}