import React from 'react';
import './PostPage.css';

import Footer from '../../Footer';
import PostContent from './PostContent';

const PostPage = () => {
  return (
    <div className='post-page'>
      <PostContent />
      <Footer />
    </div>
  );
};

export default PostPage;
