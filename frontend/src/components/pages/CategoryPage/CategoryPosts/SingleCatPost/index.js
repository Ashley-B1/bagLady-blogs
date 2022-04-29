import React, { useEffect } from "react";
import './SingleCatPost.css';

import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import * as categoriesActions from '../../../../../store/categories';

const SingleCatPost = ({ post }) => {
  const dispatch = useDispatch();
  const categoryId = Number(useParams().categoryId);

  useEffect(() => {
    dispatch(categoriesActions.getCategories());
  }, [dispatch]);

  const categories = useSelector(state => {
    return Object.values(state.categories.entries);
  });

  const category = categories.find(category => category.id === categoryId)

  return (
    <div className='sc-post'>
      <img
        className='sc-image'
        src={post?.photo}
        alt='sc-placeholder'
      />
      <div className="scp-category">
        <span className="single-category">
          {category?.name}
        </span>
      </div>
      <div className='scp-info'>
        <Link className="link" to={`/posts/${post.id}`}>
          <span className="scp-title">{post?.title}</span>
        </Link>
        <span className="scp-date"><i>{new Date(post?.createdAt).toDateString()}</i></span>
      </div>
      <div className="scp-content">
        <p className="single-content">
          {post?.content}
        </p>
      </div>
    </div>
  );
};

export default SingleCatPost;
