import React from "react";

import {Container, Row, Col} from "react-bootstrap"
import ChatItems from "./ChatItems";
import Search from "./Search"
import TopLeftBar from "./TopLeftBar";
import Login from "./Login";

export default function MainPage() {
    return (
        <Container>
            <Row>
                <Col>
                <TopLeftBar/>
                <Search/>
                    <ChatItems />
                </Col>
                <Col>
                    <chatPage />
                </Col>
            </Row>
            <Login/>
        </Container>
    );
}
