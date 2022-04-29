import React, { useEffect } from "react";
import './SingleUserPost.css';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import * as categoriesActions from '../../../../../store/categories';

const SingleUserPost = ({ post }) => {
  // console.log('-------------------- post', post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesActions.getCategories());
  }, [dispatch]);

  const categories = useSelector(state => {
    return Object.values(state.categories.entries);
  });

  const category = categories.find(category => post.categoryId === category.id);

  return (
    <div className='su-post'>
      <img
        className="sup-image"
        src={post?.photo}
        alt="placeholder"
      />
      <div className="sup-category">
        <Link className="link" to={`/categories/${category?.id}`}>
          <span className="sp-category">{category?.name}</span>
        </Link>
      </div>
      <div className="sup-info">
        <Link className="link" to={`/posts/${post?.id}`}>
          <span className="sup-title">{post?.title}</span>
        </Link>
        <span className="sup-date"><i>{new Date(post?.createdAt).toDateString()}</i></span>
      </div>
      <div className="sup-content">
        <p className="sp-content">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default SingleUserPost;
