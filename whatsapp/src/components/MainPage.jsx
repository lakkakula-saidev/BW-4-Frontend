import React from "react";
import ChatPage from "./ChatPage";
import { Container, Row, Col } from "react-bootstrap";
import ChatItems from "./ChatItems";

import { withRouter } from "react-router-dom";

function MainPage() {
    return (
        <Container className="border rounded p-0 mt-3">
            <Row>
                <Col md={4} className="chatList d-none d-md-block">
                    <div /* onClick={() => this.props.fetch_Chat()} */>
                        <ChatItems />
                    </div>
                </Col>
                <Col xs={12} md={8} className="chatPage">
                    <ChatPage />
                </Col>
            </Row>
        </Container>
    );
}

export default withRouter(MainPage);
