import React from "react";

import "react-chat-elements/dist/main.css";
import { Search, ThreeDotsVertical, EmojiLaughing, Paperclip, MicFill } from "react-bootstrap-icons";
import { Container, Row, Col, Form } from "react-bootstrap";

function ChatPage() {
    return (
        <Container className="mainContianer-chat">
            <Row className="chatHeader">
                {" "}
                <div id="chatBoxDetails">
                    <div className="" role="button">
                        <div className="chatHeadImgDiv">
                            <img src="https://source.unsplash.com/random" alt="" height="50px" />
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
            <Row className="chatBody py-2">
                <img src="https://source.unsplash.com/random" />
            </Row>
            <Row className="chatFooter ">
                <div className="chatFooterDetails py-1 px-3 ">
                    <div className="icon-width">
                        <EmojiLaughing size="25" />
                    </div>
                    <div>
                        <Paperclip size="25" />
                    </div>
                    <Form className="messageInput">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </Form>
                    <div>
                        <MicFill size="25" />
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default ChatPage;
