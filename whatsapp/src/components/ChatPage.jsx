import React from "react";
import { useState, useEffect, useMemo } from "react";
import "react-chat-elements/dist/main.css";
import { Search, ThreeDotsVertical, EmojiLaughing, Paperclip, MicFill, Image } from "react-bootstrap-icons";
import { Container, Row, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import allActions from "../actions/index.js";
import { MessageList } from "react-chat-elements";

const endpoint = process.env.REACT_APP_BACK_URL;
function ChatPage(_props) {
    const user = useSelector((state) => state.user);
    const chat = useSelector((store) => store.chat);
    const socket = useMemo(() => io(endpoint, { transports: ["websocket"] }), []);
    const [message, setMessage] = useState("");
    const receiver = chat.current_chat_room.members?.filter((member) => member._id !== user.currentUser._id)[0];
    const dispatch = useDispatch();

    function updateScroll() {
        let objDiv = document.getElementById("chatBody");
        objDiv.scrollTop = objDiv.offsetHeight;
    }

    useEffect(
        () => {
            /* ss */
            console.log("adding event listeners");
            socket.on("connect", () => {
                // with on we're listening for an event
                console.log(socket.id);

                socket.emit("did-connect" /*userId */);
            });

            socket.on("message", ({ message, roomId }) => {
                console.log({ message, roomId }, "This is emit from back..");
                dispatch(allActions.chatActions.push_new_message({ message: message.message, sender: message.sender }));
            });
        },
        [
            /* chat.current_chat_room._id, user.currentUser.username */
        ]
    );

    useEffect(() => {
        socket.emit("joinRoom", { username: user.currentUser.username, roomId: chat.current_chat_room._id });
        socket.on("joinRoom", { username: user.currentUser.username, roomId: chat.current_chat_room._id });
    }, [chat.current_chat_room._id, user.currentUser.username]);

    function handleSubmit(e) {
        e.preventDefault();
        const roomId = chat.current_chat_room._id;
        console.log(chat.current_chat_room);
        socket.emit("sendMessage", {
            roomId,
            message: {
                message: message,
                sender: user.currentUser._id
            }
        });
        console.log(message);
        dispatch(allActions.chatActions.push_new_message({ message: message, sender: user.currentUser }));
        setMessage("");
    }

    return (
        <Container className="mainContianer-chat">
            <Row className="chatRow chatHeader">
                <div id="chatBoxDetails">
                    <div className="" role="button">
                        <div className="chatHeadImgDiv">
                            <img src={receiver?.avatar} /* style={{ borderRadius: "50%" }} */ className="rounded-circle" alt="" />
                        </div>
                    </div>
                    <div className="chatUser">
                        <div className="chatUser-details">{chat.current_chat_room.members ? receiver.firstname : "No room"}</div>
                        <div className="chatUser-details">{chat.current_chat_room.members ? "online" : ""}</div>
                    </div>
                    <div className="chatHeadIconDiv">
                        <Search size="20" />
                    </div>
                    <div className="chatHeadIconDiv">
                        <ThreeDotsVertical size="20" />
                    </div>
                </div>
            </Row>
            <Row className="chatRow" id="chatBody">
                <div className="chatBody-childDiv py-2">
                    {chat.current_chat_room.chats?.length > 0 ? (
                        chat.current_chat_room.chats.map((chat) => {
                            return (
                                <div className={`d-flex flex-row${chat.sender._id === user.currentUser?._id ? "-reverse" : ""}`}>
                                    <div key={chat._id} className={` ${chat.sender._id === user.currentUser?._id ? "messageSent round p-2 m-3" : "messageReceived round p-2 m-3"}`}>
                                        <strong>{chat.sender.firstname} </strong>
                                        <p>{chat.message} </p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div>
                            <p className="py-4 ">
                                <strong>Click and Start a chat</strong>
                            </p>
                        </div>
                    )}
                </div>
            </Row>
            <Row className="chatRow chatFooter ">
                <div className="chatFooterDetails py-2 px-3 ">
                    <div className="icon-width">
                        <EmojiLaughing size="25" />
                    </div>
                    <div>
                        <Paperclip size="25" />
                    </div>
				
                    <Form className="messageInput" onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type here" />
                        </Form.Group>
                    </Form>
				
                    <div>
                        <MicFill size="22" />
                    </div>
                </div>
            </Row>
        </Container>
    );
}
export default ChatPage;
