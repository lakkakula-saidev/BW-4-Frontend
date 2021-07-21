/** @format */

import { ChatList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/Login.css";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import Search from "./Search";
import Profile from "./Profile";
import "../Styles/chatBox.css";
import "../css/Login.css";

const endpoint = process.env.REACT_APP_BACK_URL;

export default function ChatItems() {
  const [users, setUsers] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const [isClicked, setisClicked] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(endpoint + "/users", { withCredentials: true })
      .then((response) => setUsers(response.data));

    // 4. Setting *dogImage* to the image url that we received from the response above
  }, []);

  function Search (e) {
    setQuery(e.target.value)
    axios
    .get(endpoint + "/users?" + query, { withCredentials: true })
    .then((response) => {console.log(response.data);
         setListUsers(response.data)});

  }

  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <div className='chatHeadImgDiv1' role='button'>
          <div className='chatHeadImgDiv1'>
            <img onClick={() => {
            isClicked ? setisClicked(false) : setisClicked(true);
          }}
              src='https://source.unsplash.com/random'
              /* style={{ borderRadius: "50%" }} */ className='rounded-circle'
              alt=''
            />
          </div>
        </div>

        <ThreeDotsVertical
          className='chatHeadImgDiv1'
          
        />
      </Navbar>
      <div className='dov'>
        <Form className=' search'>
        <Form.Control autoFocus type="query" value={query} onChange={(e) => Search(e)} />
        </Form>
      </div>

      {isClicked ? (
        <ChatList
          className='chat-list'
          dataSource={[
            {
              avatar: "https://source.unsplash.com/random",
              alt: "Reactjs",
              title: "{ user }",
              subtitle: "What are you doing?",
              date: new Date(),
              unread: 0,
            },
          ]}
        />
      ) : (
        <Profile />
      )}
    </div>
  );
}
