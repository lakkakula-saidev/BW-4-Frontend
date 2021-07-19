import React from "react";
import ChatPage from "./ChatPage";

import { Container, Row, Col } from "react-bootstrap";
import ChatItems from "./ChatItems";
import Search from "./Search";
import TopLeftBar from "./TopLeftBar";
import Login from "./Login";

export default function MainPage() {
    return (
        <Container className="mainContianer">
            <Row>
                <Col className="chatList col-md-4 ">
                    <TopLeftBar />
                    <Search />
                    <ChatItems />
                </Col>
                <Col className="chatPage col-md-8">
                    <ChatPage />
                </Col>
            </Row>
            <Login />
        </Container>
    );
}

export default MainPage;
