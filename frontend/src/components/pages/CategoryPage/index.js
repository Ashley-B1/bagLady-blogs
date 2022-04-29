import React from 'react';
import './CategoryPage.css';

import SideBar from '../../SideBar';
import CategoryPosts from './CategoryPosts';

const CategoryPage = () => {
  return (
    <div className='category-page'>
      <CategoryPosts />
      <SideBar />
    </div>
  );
};

export default CategoryPage;
