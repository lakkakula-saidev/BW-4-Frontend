import { ChatList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/Login.css";
import { Navbar, Form } from "react-bootstrap";
import { ThreeDotsVertical, Search as SearchIcon } from "react-bootstrap-icons";
import Profile from "./Profile";
import "../Styles/chatBox.css";
import "../css/Login.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions/index";

const endpoint = process.env.REACT_APP_BACK_URL;
export default function ChatItems() {
    const user = useSelector((state) => state.user);
    const prevRooms = useSelector((store) => store.chat.prev_chat_rooms);
    const searchUsers = useSelector((store) => store.search.search_result);
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const [listUsers, setListUsers] = useState([]);
    const [isClicked, setisClicked] = useState(true);
    const [new_click, setNew_click] = useState(true);
    const [query, setQuery] = useState("");

    const revList = prevRooms.reverse();
    useEffect(() => {
        axios.get(endpoint + "/users", { withCredentials: true }).then((response) => setUsers(response.data));
        dispatch(allActions.chatActions.fetch_Chat_Rooms());
    }, [dispatch]);

    function Search(e) {
        setNew_click(true);
        setQuery(e.target.value);
        dispatch(allActions.searchActions.search_Users(e.target.value));
        /*  dispatch(allActions.chatActions.set_chat()); */
        setListUsers(searchUsers);
    }

    function handleStartChat(e, target) {
        setNew_click(false);
        setQuery("");
        if (target) dispatch(allActions.chatActions.fetch_new_chat_rooms({ members: [target._id, user.currentUser._id] }));
        else throw new Error("no target!");
    }

    function handleOldRoom(e, target) {
        if (target) dispatch(allActions.chatActions.handle_current_room(target));
        else throw new Error("no target!");
    }

    return (
        <div>
            <Navbar bg="light" className="d-flex justify-content-between align-items-center">
                <img src={user.currentUser.avatar} className="rounded-circle avatar" alt="" />

                <ThreeDotsVertical
                    size="20"
                    className="chatHeadImgDiv1"
                    onClick={() => {
                        isClicked ? setisClicked(false) : setisClicked(true);
                    }}
                />
            </Navbar>

            {isClicked ? (
                <div className="chatItemBody">
                    <div className="dov">
                        <SearchIcon />
                        <Form className="search">
                            <Form.Control type="query" className="rounded-pill searchBarUsers" style={{ border: "none" }} value={query} onChange={(e) => Search(e)} />
                        </Form>
                    </div>
                    {query.length !== 0 ? (
                        new_click && (
                            <div className="userListDiv" id="style-3">
                                {searchUsers && searchUsers.length > 0 ? (
                                    searchUsers.map((item) => (
                                        <div key={item._id} id={item._id} onClick={(e) => handleStartChat(e, item)}>
                                            <ChatList
                                                className="chat-list"
                                                dataSource={[
                                                    {
                                                        avatar: item.avatar,
                                                        alt: "Reactjs",
                                                        title: item.firstname,
                                                        subtitle: "",
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
                            </div>
                        )
                    ) : (
                        <>
                            <div className="userListDiv" id="style-3">
                                {prevRooms && prevRooms.length > 0 ? (
                                    prevRooms.reverse().map((room) => {
                                        const filteredUsers = room.members?.filter((member) => member._id !== user.currentUser._id);
                                        console.log(filteredUsers);
                                        return (
                                            <div key={room._id} id={room._id} onClick={(e) => handleOldRoom(e, room)}>
                                                <ChatList
                                                    className="chat-list"
                                                    dataSource={[
                                                        {
                                                            avatar: filteredUsers[0].avatar,
                                                            alt: "Reactjs",
                                                            title: filteredUsers[0].firstname,
                                                            subtitle: room.chatslength > 0 ? room.chats[room.chats.length - 1].message : "",
                                                            date: new Date(),
                                                            unread: 0
                                                        }
                                                    ]}
                                                />
                                            </div>
                                        );
                                    })
                                ) : (
                                    <>{"No current chats"}</>
                                )}
                            </div>
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
