import React, { useEffect } from "react";
import './CategoryPosts.css';


import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import * as categoriesActions from '../../../../store/categories';
import SingleCatPost from "./SingleCatPost";

const CategoryPosts = () => {
  const dispatch = useDispatch();
  const categoryId = Number(useParams().categoryId);
  // console.log(categoryId);

  useEffect(() => {
    dispatch(categoriesActions.getPosts(categoryId));
  }, [dispatch, categoryId]);

  const categoryPosts = useSelector(state => {
    return Object.values(state.categories.posts);
  });

  // console.log('------------------------- POSTS', categoryPosts);
  return (
    <div className="category-posts">
      {categoryPosts?.map(post => (
        <SingleCatPost key={post?.id} post={ post } />
      ))}
    </div>
  );
};

export default CategoryPosts
