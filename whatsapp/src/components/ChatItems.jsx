/** @format */

import { ChatList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/Login.css";
import { Navbar, Container } from "react-bootstrap";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import Search from "./Search";
import Profile from "./Profile";
import "../Styles/chatBox.css";

const endpoint = process.env.REACT_APP_BACK_URL;

export default function ChatItems() {
  const [users, setUsers] = useState([]);
  const [isClicked, setisClicked] = useState(true);

  useEffect(() => {
    axios
      .get(endpoint + "/users", { withCredentials: true })
      .then((response) => setUsers(response.data));

    // 4. Setting *dogImage* to the image url that we received from the response above
  }, []);

  return (
    <div>
      <Navbar bg='light' expand='lg'>
      <div className="chatHeadImgDiv1" role="button">
                        <div className="chatHeadImgDiv1">
                            <img src="https://source.unsplash.com/random" /* style={{ borderRadius: "50%" }} */ className="rounded-circle" alt="" />
                        </div>
                    </div>

        
          <ThreeDotsVertical onClick={()=>{isClicked ? setisClicked(false):setisClicked(true)}} />
        
      </Navbar>
      <Search />

     
        {
          isClicked ? 
          
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
          : 
          <Profile/>
      
          
        }
      
    </div>
  );
}
