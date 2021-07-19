import { ChatList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';



    export default function ChatItems() {
        return (
            <ChatList
            className='chat-list'
            dataSource={[
                {
                    avatar: 'https://facebook.github.io/react/img/logo.svg',
                    alt: 'Reactjs',
                    title: 'Facebook',
                    subtitle: 'What are you doing?',
                    date: new Date(),
                    unread: 0,
                },
               
            ]} />
        );
    }