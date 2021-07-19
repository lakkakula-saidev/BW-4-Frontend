import React from "react";
import { View, Text } from "react-native";
import {Container, Row, Col} from "react-bootstrap"

export default function mainPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <chatItems />
                </Col>
                <Col>
                    <chatPage />
                </Col>
            </Row>
        </Container>
    );
}
