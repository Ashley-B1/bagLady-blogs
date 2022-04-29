import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import './PostBottom.css';

import * as postsActions from '../../../../../../store/posts';

const PostBottom = () => {
  const dispatch = useDispatch();
  const postId = Number(useParams().postId);

  const posts = useSelector(state => {
    return Object.values(state.posts.entries);
  });

  useEffect(() => {
    dispatch(postsActions.getAllPost())
  }, [dispatch]);

  const post = posts?.find(post => post.id === postId);

  // console.log(post)

  return (
    <div className='post-bottom'>
      <div className='sp-wrapper'>
        <img
          className='sp-image'
          src={post?.photo}
          alt="placeholder"
        />
      </div>
      <p className='spp-content'>
        {post?.content}
      </p>
    </div>
  );
};

export default PostBottom;
