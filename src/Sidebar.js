import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {
    const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
        );
  };

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="data:image/jpeg;base64,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" alt="" />
            <Avatar className='sidebar_avatar' src={user.photoUrl} >
                {user.email[0]}    
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>

        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you?</p>
                <p className='sidebar_statnumber'>2567</p>
            </div>
            <div className="sidebar_stat">
                <p>views on post</p>
                <p className='sidebar_statnumber'>160</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('wed_development')}
            {recentItem('programming')}
            {recentItem('design')}
            {recentItem('developer')}
            
        </div>
    </div>
  );
}

export default Sidebar