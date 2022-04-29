import React from 'react';
import './UserPostPage.css';

import SideBar from '../../SideBar';
import UserPosts from './UserPosts';

const UserPostPage = () => {
  return (
    <div className='user-post'>
      <UserPosts />
      <SideBar />
    </div>
  );
};

export default UserPostPage;
