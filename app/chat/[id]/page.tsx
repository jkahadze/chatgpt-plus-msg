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
        <div onClick={exitSideBar} className="flex h-screen flex-col">
            <MobileMenu />
            {/* ChatInput */}
            <ChatInput chatId={id} />
            {/* Chat  */}
            <Chat chatId={id} />
        </div>
    )
}

export default ChatPage