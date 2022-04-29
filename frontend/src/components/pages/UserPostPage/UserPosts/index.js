import React, { useEffect } from "react";
import './UserPosts.css';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import * as postsActions from '../../../../store/posts';
import SingleUserPost from "./SingleUserPost";

const UserPosts = () => {
  const dispatch = useDispatch();
  const userId = Number(useParams().userId);
  // console.log(userId);

  useEffect(() => {
    dispatch(postsActions.fetchUserPosts(userId));
  }, [dispatch, userId]);

  const userPosts = useSelector(state => {
    return Object.values(state.posts.userPosts)
  });


  return (
    <div className="user-posts">
      {userPosts.map(post => (
        <SingleUserPost key={post.id} post={ post } />
      ))}
    </div>
  );
};

export default UserPosts;
