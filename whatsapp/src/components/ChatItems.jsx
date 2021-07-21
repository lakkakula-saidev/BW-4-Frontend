import { ChatList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { useEffect } from "react";
import io from "socket.io-client";

const socket = io(process.env.REACT_APP_BACK_URL, { transport: ["websocket"] });

export default function ChatItems() {
    async function startChat() {}

    return (
        <div id="abcdefs" onClick={(e) => startChat(e)}>
            {" "}
            <ChatList
                className="chat-list"
                dataSource={[
                    {
                        avatar: "https://source.unsplash.com/random",
                        alt: "Reactjs",
                        title: "Facebook",
                        subtitle: "What are you doing?",
                        date: new Date(),
                        unread: 0
                    }
                ]}
            />
        </div>
    );
}
