import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SinglePost.css";

import { Link } from "react-router-dom";

import * as categoriesActions from '../../store/categories'

const SinglePost = ({ post }) => {
  const dispatch = useDispatch();

  const categories = useSelector(state => {
    return Object.values(state.categories.entries);
  });

  useEffect(() => {
    dispatch(categoriesActions.getCategories())
  }, [dispatch]);


  const category = categories.find(category => category.id === post.categoryId);

  return (
    <div className="single-post">
      <img
        className="post-image"
        src={post?.photo}
        alt="placeholder"
      />
      <div className="post-category">
        <Link to={`/categories/${category?.id}`} className='link'>
          <span className="category">{category?.name}</span>
        </Link>
      </div>
      <div className="post-info">
        <Link className="link" to={`/posts/${post.id}`}>
          <span className="post-title">{post?.title}</span>
        </Link>
        <span className="post-date"><i>{new Date(post?.createdAt).toDateString()}</i></span>
      </div>
      <div className="post-content">
        <p className="content">
          {post?.content}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
