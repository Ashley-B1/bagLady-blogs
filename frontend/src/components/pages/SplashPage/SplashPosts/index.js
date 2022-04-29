import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './SplashPost.css';

import SinglePost from '../../../SinglePost';
import * as postsActions from '../../../../store/posts';

const SplashPosts = () => {
  const dispatch = useDispatch();

  const posts = useSelector(state => {
    return Object.values(state.posts.entries);
  });

  useEffect(() => {
    dispatch(postsActions.getAllPost());
  }, [dispatch]);

  // console.log(posts);

  return (
    <div className='splash-posts'>
      {posts?.map(post => (
        <SinglePost key={post?.id} post={ post } />
      ))}
    </div>
  );
};

export default SplashPosts;
