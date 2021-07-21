import { ChatList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/Login.css";

const endpoint = process.env.REACT_APP_BACK_URL;

export default function ChatItems() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(endpoint + "/users", { withCredentials: true }).then((response) => setUsers(response.data));

        // 4. Setting *dogImage* to the image url that we received from the response above
    }, []);

    return (
        <div>
            {users.map((user) => {
                <ChatList
                    className="chat-list"
                    dataSource={[
                        {
                            avatar: "https://source.unsplash.com/random",
                            alt: "Reactjs",
                            title: { user },
                            subtitle: "What are you doing?",
                            date: new Date(),
                            unread: 0
                        }
                    ]}
                />;
            })}
        </div>
    );
}
