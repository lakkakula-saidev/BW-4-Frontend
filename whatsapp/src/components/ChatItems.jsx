import { ChatList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/Login.css";
import { Navbar, Form } from "react-bootstrap";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import Profile from "./Profile";
import "../Styles/chatBox.css";
import "../css/Login.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions/index";

const endpoint = process.env.REACT_APP_BACK_URL;

export default function ChatItems() {
    const prevRooms = useSelector((store) => store.chat.prev_chat_rooms);
    const searchUsers = useSelector((store) => store.search.search_result);
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [listUsers, setListUsers] = useState([]);
    const [isClicked, setisClicked] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(endpoint + "/users", { withCredentials: true }).then((response) => setUsers(response.data));
        dispatch(allActions.chatActions.fetch_Chat_Rooms());
    }, []);

    async function Search(e) {
        setQuery(e.target.value);
        console.log(query);
        await dispatch(allActions.searchActions.search_Users(query));
        setListUsers(searchUsers);
    }

    return (
        <div>
            <Navbar bg="light" expand="lg" className="chatItemHeader">
                <div className="chatHeadImgDiv1" role="button">
                    <div className="chatHeadImgDiv1">
                        <img
                           
                            src="https://source.unsplash.com/random"
                            /* style={{ borderRadius: "50%" }} */ className="rounded-circle"
                            alt=""
                        />
                    </div>
                </div>

                <ThreeDotsVertical className="chatHeadImgDiv1"  onClick={() => {
                                isClicked ? setisClicked(false) : setisClicked(true);
                            }} />
            </Navbar>

            {isClicked ? (
                <div className="chatItemBody">
                    <div className="dov">
                        <Form className="search">
                            <Form.Control type="query" className="searchBarUsers" style={{ border: "none" }} value={query} onChange={(e) => Search(e)} />
                        </Form>
                    </div>
                    {query.length !== 0 ? (
                        <>
                            {listUsers && listUsers.length > 0 ? (
                                listUsers.map((user) => (
                                    <div /* onClick={} */>
                                        <ChatList
                                            className="chat-list"
                                            dataSource={[
                                                {
                                                    avatar: "https://source.unsplash.com/random",
                                                    alt: "Reactjs",
                                                    title: user.username,
                                                    subtitle: "What are you doing?",
                                                    date: new Date(),
                                                    unread: 0
                                                }
                                            ]}
                                        />
                                    </div>
                                ))
                            ) : (
                                <>{"No current chats"}</>
                            )}
                        </>
                    ) : (
                        <>
                            {prevRooms && prevRooms.length > 0 ? (
                                prevRooms.map((room) => (
                                    <div /* onClick={} */>
                                        <ChatList
                                            className="chat-list"
                                            dataSource={[
                                                {
                                                    avatar: "https://source.unsplash.com/random",
                                                    alt: "Reactjs",
                                                    title: room.roomName,
                                                    subtitle: "What are you doing?",
                                                    date: new Date(),
                                                    unread: 0
                                                }
                                            ]}
                                        />
                                    </div>
                                ))
                            ) : (
                                <>{"No current chats"}</>
                            )}
                        </>
                    )}
                </div>
            ) : (
                <div className="chatItemBody">
                    <Profile />
                </div>
            )}
        </div>
    );
}
