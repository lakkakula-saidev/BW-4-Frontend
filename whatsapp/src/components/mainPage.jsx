import React from "react";
import { View, Text } from "react-native";

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
