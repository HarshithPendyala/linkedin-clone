import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import { addDoc, Timestamp, collection,query,orderBy,onSnapshot} from 'firebase/firestore'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [posts,setPosts] = useState([]);
    const [input,setInput] = useState('');
    useEffect(() => {
        const q = query(collection(db,"posts"), orderBy('timestamp','desc'))
        onSnapshot(q,snapshot =>{
            setPosts(snapshot.docs.map(doc =>(
                {
                    id: doc.id,
                    data: doc.data()
                }
                )));
            })
        },[])
    const sendPost = e => {
        e.preventDefault();
        addDoc(collection(db,'posts'),{
            name: user.displayName,
            description: user.email,
            message: input,
            timestamp: Timestamp.now()
        })
        setInput('');
    }
  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form>
                    <input type="text" value={input} onChange={e=> setInput(e.target.value)}  />
                    <button type='submit' onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5f9'/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E'/>
            </div>
        </div>
        <FlipMove>

        {posts.map(({id,data:{name,description,message}}) =>
            <Post 
            key={id}
            name={name} 
            description={description}
            message={message} />
            )}        
        </FlipMove>
    </div>
  )
}

export default Feed; 