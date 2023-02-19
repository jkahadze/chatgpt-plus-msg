"use client"

import { useContext } from "react"
import Chat from "../../../components/Chat"
import ChatInput from "../../../components/ChatInput"
import MobileMenu from "../../../components/MobileMenu"
import { SideBarContext, SidebarContextProvider } from "../../../components/SidebarContext"

type Props = {
    params: {
        id: string
    }
}

function ChatPage({ params: { id } }: Props) {

    const { showSide, setShowSide } = useContext(SideBarContext)

    function exitSideBar() {
        if (showSide) {
            setShowSide(false);
        }
    }

    return (
        <div onClick={exitSideBar} className="flex flex-col min-h-screen overflow-hidden max-h-screen">
            <MobileMenu />
            {/* Chat  */}
            <Chat chatId={id} />
            {/* ChatInput */}
            <ChatInput chatId={id} />
        </div>
    )
}

export default ChatPage