import React from "react";

import {Container, Row, Col} from "react-bootstrap"
import ChatItems from "./ChatItems";

export default function MainPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <ChatItems />
                </Col>
                <Col>
                    <chatPage />
                </Col>
            </Row>
        </Container>
    );
}
