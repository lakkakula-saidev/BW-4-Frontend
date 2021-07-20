import React from "react";
import ChatPage from "./ChatPage";
import { Container, Row, Col } from "react-bootstrap";
import ChatItems from "./ChatItems";
import Search from "./Search";
import TopLeftBar from "./TopLeftBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    /* fetch_Chat: (data) => {
        dispatch(fetch_Chat(data));
    }*/
});

function MainPage() {
    return (
        <Container className="mainContainer">
            <Row className="mainContianerRow py-4">
                <Col className="chatList col-md-4 ">
                    <TopLeftBar />
                    <Search />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage));
