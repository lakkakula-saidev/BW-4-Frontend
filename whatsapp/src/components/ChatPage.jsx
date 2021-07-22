/** @format */

import React from "react";
import { useState, useEffect } from "react";
import "react-chat-elements/dist/main.css";
import {
  Search,
  ThreeDotsVertical,
  EmojiLaughing,
  Paperclip,
  MicFill,
  Image,
} from "react-bootstrap-icons";
import { Container, Row, Form } from "react-bootstrap";
import allActions from "../actions/index.js";
import { useDispatch } from "react-redux";
import { useRef } from "react";

/* const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    fetch_Chat: (data) => {
        dispatch(fetch_Chat(data));
    }
}); */

function ChatPage(props) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const inputFile = useRef(null);

  function updateScroll() {
    let objDiv = document.getElementById("chatBody");
    objDiv.scrollTop = objDiv.offsetHeight;
    console.log("I am scrolling");
  }

  function handleImageChange() {
    console.log("heelo you should only see me once ideally");
    inputFile.current.click();
    if (inputFile !== null) {
      const formData = new FormData();
      formData.append("avatar", inputFile.current.files[0]);
      dispatch(allActions.userActions.update_Avatar(formData));
    }
  }

  useEffect(() => {
    updateScroll();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(allActions.chatActions.fetch_Chat(message));
    setMessage("");
  }

  return (
    <Container className='mainContianer-chat'>
      <Row className='chatRow chatHeader'>
        <div id='chatBoxDetails'>
          <div className='' role='button'>
            <div className='chatHeadImgDiv'>
              <img
                src='https://source.unsplash.com/random'
                /* style={{ borderRadius: "50%" }} */ className='rounded-circle'
                alt=''
              />
            </div>
          </div>
          <div className='chatUser'>
            <div className='chatUser-details'>I am here</div>
            <div className='chatUser-details'>I am here</div>
          </div>
          <div className='chatHeadIconDiv'>
            <Search size='20' />
          </div>
          <div className='chatHeadIconDiv'>
            <ThreeDotsVertical size='20' />
          </div>
        </div>
      </Row>
      <Row className='chatRow  ' id='chatBody'>
        <div className='chatBody-childDiv py-2 '>
          <p className='py-4 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa
            explicabo! Quae recusandae aliquid error pariatur in nobis animi,
            enim quasi.
          </p>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa
            explicabo! Quae recusandae aliquid error pariatur in nobis animi,
            enim quasi.
          </p>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa
            explicabo! Quae recusandae aliquid error pariatur in nobis animi,
            enim quasi.
          </p>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa
            explicabo! Quae recusandae aliquid error pariatur in nobis animi,
            enim quasi.
          </p>

          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa
            explicabo! Quae recusandae aliquid error pariatur in nobis animi,
            enim quasi.
          </p>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa
            explicabo! Quae recusandae aliquid error pariatur in nobis animi,
            enim quasi.
          </p>

          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa
            explicabo! Quae recusandae aliquid error pariatur in nobis animi,
            enim quasi.
          </p>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos quo! Accusamus recusandae repudiandae, eum quae at totam culpa
            explicabo! Quae recusandae aliquid error pariatur in nobis animi,
            enim quasi.
          </p>
        </div>
      </Row>
      <Row className='chatRow chatFooter '>
        <div className='chatFooterDetails py-2 px-3 '>
          <div className=' m-1'>
            {/* <Image size='25' /> */}
            <div className='profileImgDiv1' onClick={() => handleImageChange()}>
              <input
                type='file'
                id='file'
                ref={inputFile}
                style={{ display: "none" }}
              />
              <img
                type='file'
                src={"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"}
                /* style={{ borderRadius: "50%" }} */ className='profile-rounded-circle'
                alt=''
              />
            </div>
          </div>

          <Form className='messageInput' onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Control
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='name@example.com'
              />
            </Form.Group>
          </Form>
          <div>
            <MicFill size='22' />
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default ChatPage;
