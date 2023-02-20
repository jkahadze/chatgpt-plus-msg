"use client"

import { PlusIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { db } from '../firebase';
import { SideBarContext } from './SidebarContext';

function NewChat() {

    const router = useRouter();
    const { data: session } = useSession();
    const { showSide, setShowSide } = useContext(SideBarContext)


    const createNewChat = async () => {
        const doc = await addDoc(collection(db, 'users', session?.user?.email!, "chats"), {
            userId: session?.user?.email!,
            createdAt: serverTimestamp()
        });

        setShowSide(false);
        router.push(`/chat/${doc.id}`)
    }

    return (
        <div onClick={createNewChat} className="border-gray-700 border chatRow text-base">
            <PlusIcon className="h-5 w-4" />
            <p>New Chat</p>
        </div>
    )
}

export default NewChat