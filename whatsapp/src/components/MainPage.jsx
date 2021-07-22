import React from "react";
import ChatPage from "./ChatPage";
import { Container, Row, Col } from "react-bootstrap";
import ChatItems from "./ChatItems";

import { withRouter } from "react-router-dom";

function MainPage() {
    return (
        <Container className="mainContainer">
            <Row className="mainContianerRow py-4">
                <Col className="chatList col-md-4 ">
                    <div /* onClick={() => this.props.fetch_Chat()} */>
                        <ChatItems />
                    </div>
                </Col>
                <Col className="chatPage col-md-8">
                    <ChatPage />
                </Col>
            </Row>
        </Container>
    );
}

export default withRouter(MainPage);
