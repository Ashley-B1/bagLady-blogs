import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './Top.css';

import * as categoriesActions from '../../../../store/categories';

const WrapperTop = () => {
  const dispatch = useDispatch();

  const categories = useSelector(state => {
    return Object.values(state.categories.entries);
  });

  useEffect(() => {
    dispatch(categoriesActions.getCategories());
  }, [dispatch]);

  return (
    <div className="wrapper-top">
      <div className='wrapper-title'>
        <h1 className='main-header'>
          Bag Lady Blog
        </h1>
      </div>
      <div className='wrapper-categories'>
        <ul className='blog-categories'>
          {categories?.map(category => (
            <Link to={`/categories/${category?.id}`} className='link'>
              <li key={category?.id} className='category-name'>{category?.name.toUpperCase()}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WrapperTop;
