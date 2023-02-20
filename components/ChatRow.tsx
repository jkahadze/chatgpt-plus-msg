"use client"

import Link from "next/link";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { SideBarContext } from "./SidebarContext";

type Props = {
    id: string;
}

function ChatRow({ id }: Props) {

    console.log("CHAT ROW RENDER")

    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);
    const [messages] = useCollection(
        collection(db, "users", session?.user?.email!, "chats", id, "messages")
    )
    const { showSide, setShowSide } = useContext(SideBarContext)

    function exitSideBar() {
        if (showSide) {
            setShowSide(false);
        }
    }

    useEffect(() => {
        if (!pathname) return;

        setActive(pathname.includes(id));
    }, [pathname])

    const removeChat = async () => {
        await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
        router.replace("/");
    }

    return (
        <div className={`flex rounded-lg items-center justify-center hover:bg-gray-700/70 cursor-pointer transition-all duration-200 ease-out ${active && "bg-gray-700/50"}`}>
            <Link href={`/chat/${id}`} onClick={exitSideBar} className={`flex px-5 py-5 space-x-2 text-sm w-full items-center justify-center text-gray-300 `} >
                <ChatBubbleLeftIcon className="h-5 w-5" />
                <p className="flex-1 inline-flex text-base">{messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}</p>
            </Link >
            <div className={`flex px-5 py-5 space-x-2 text-sm items-center justify-center text-gray-300 `}>
                <TrashIcon
                    onClick={removeChat}
                    className="h-5 w-5 text-gray-780 hover:text-red-780" />
            </div>
        </div>
    );
}

export default ChatRow