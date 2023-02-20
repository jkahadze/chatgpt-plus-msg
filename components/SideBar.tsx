'use client'

import { useSession, signOut } from "next-auth/react"
import NewChat from "./NewChat"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase"
import { collection, orderBy, query } from "firebase/firestore"
import ChatRow from "./ChatRow"
import ModelSelection from "./ModelSelection"
import { SideBarContext } from "./SidebarContext"
import { useContext } from "react"

function SideBar() {

    const { data: session } = useSession();
    const [chats, loading, error] = useCollection(
        session && query(
            collection(db, "users", session?.user?.email!, "chats"),
            orderBy("createdAt", "asc")
        )
    );

    const { showSide, setShowSide } = useContext(SideBarContext);

    return (
        <div className="sidebar bg-[#202123] max-w-xs h-screen overflow-y-auto min-w-[20rem] absolute md:relative md:translate-x-0 inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out">
            <div className="p-2 flex flex-col h-screen">
                <div className="flex-1">
                    <NewChat />

                    <div className="inline">
                        {/* Model Selection */}
                        <ModelSelection />
                    </div>

                    <div className="flex flex-col space-y-2 my-2">

                        {loading && (
                            <div className="animate-pulse text-center text-white">
                                <p>Loading Chats...</p>
                            </div>
                        )}

                        {/* Map through the ChatRows */}
                        {chats?.docs.map(chat => (
                            <ChatRow key={chat.id} id={chat.id} />
                        ))}
                    </div>
                </div>

                {session &&
                    <img
                        onClick={() => signOut()}
                        src={session.user?.image!}
                        alt="Profile Picture"
                        className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50" />}

            </div>
        </div>
    )
}

export default SideBar