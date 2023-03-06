'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {

    return (
        <div className="bg-[#11A37F] h-screen flex flex-col items-center text-center justify-center px-10 py-10">
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="https://links.papareact.com/2i6"
                    width={300}
                    height={300}
                    alt="logo" />
                <h1 className="text-white font-bold text-4xl">ChatGPT Plus Messenger</h1>
                <div>
                    <button onClick={() => signIn('google')}
                        className="my-10 rounded-lg hover:bg-gray-700/50 cursor-pointer transition-all duration-200 ease-out font-bold text-2xl bg-gray-700 px-5 py-5 space-x-2 items-center justify-center text-gray-300">Sign in with Google</button>
                </div>
                <h3 className="text-white font-bold text-xl">Created by <a className="text-gray-300 hover:text-gray-700" target="_blank" href="https://github.com/jkahadze">Joseph Kahadze</a></h3>
            </div>
        </div >
    )
}

export default Login