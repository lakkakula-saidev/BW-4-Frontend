import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ChatPage from "./ChatPage";
function MainPage() {
    return (
        <Container className="mainContianer">
            <Row>
                <Col className="chatList col-md-4 pr-0">
                    {/* <ChatItems /> */}
                    <p>Hi how are you</p>
                </Col>
                <Col className="chatPage col-md-8">
                    <ChatPage />
                </Col>
            </Row>
        </Container>
    );
}

export default MainPage;
