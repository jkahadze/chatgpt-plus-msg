import Chat from "../../../components/Chat"
import ChatInput from "../../../components/ChatInput"
import MobileMenu from "../../../components/MobileMenu"

type Props = {
    params: {
        id: string
    }
}

function ChatPage({ params: { id } }: Props) {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden max-h-screen">
            <MobileMenu />
            {/* Chat  */}
            <Chat chatId={id} />
            {/* ChatInput */}
            <ChatInput chatId={id} />
        </div>
    )
}

export default ChatPage