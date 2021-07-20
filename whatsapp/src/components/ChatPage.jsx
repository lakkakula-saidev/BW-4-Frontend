import React from "react";
import { useState } from "react";
import "react-chat-elements/dist/main.css";
import { Search, ThreeDotsVertical, EmojiLaughing, Paperclip, MicFill } from "react-bootstrap-icons";
import { Container, Row, Form } from "react-bootstrap";
import allActions from "../actions/index.js";
import { useDispatch } from "react-redux";

/* const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    fetch_Chat: (data) => {
        dispatch(fetch_Chat(data));
    }
}); */

function ChatPage(props) {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(allActions.chatActions.fetch_Chat(message));
        setMessage("");
    }

    return (
        <Container className="mainContianer-chat">
            <Row className="chatRow chatHeader">
                {" "}
                <div id="chatBoxDetails">
                    <div className="" role="button">
                        <div className="chatHeadImgDiv">
                            <img src="https://source.unsplash.com/random" /* style={{ borderRadius: "50%" }} */ className="rounded-circle" alt="" />
                        </div>
                    </div>
                    <div className="chatUser">
                        <div className="chatUser-details">I am here</div>
                        <div className="chatUser-details">I am here</div>
                    </div>
                    <div className="chatHeadIconDiv">
                        <Search size="20" />
                    </div>
                    <div className="chatHeadIconDiv">
                        <ThreeDotsVertical size="20" />
                    </div>
                </div>
            </Row>
            <Row className="chatRow chatBody ">
                <div className="chatBody-childDiv py-2 ">
                    <p className="py-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa explicabo! Quae recusandae aliquid error
                        pariatur in nobis animi, enim quasi.
                    </p>
                    <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa explicabo! Quae recusandae aliquid error
                        pariatur in nobis animi, enim quasi.
                    </p>
                    <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa explicabo! Quae recusandae aliquid error
                        pariatur in nobis animi, enim quasi.
                    </p>
                    <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa explicabo! Quae recusandae aliquid error
                        pariatur in nobis animi, enim quasi.
                    </p>

                    <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa explicabo! Quae recusandae aliquid error
                        pariatur in nobis animi, enim quasi.
                    </p>
                    <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa explicabo! Quae recusandae aliquid error
                        pariatur in nobis animi, enim quasi.
                    </p>

                    <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa explicabo! Quae recusandae aliquid error
                        pariatur in nobis animi, enim quasi.
                    </p>
                    <p className="py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa explicabo! Quae recusandae aliquid error
                        pariatur in nobis animi, enim quasi.
                    </p>
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
                            <Form.Control type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="name@example.com" />
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
