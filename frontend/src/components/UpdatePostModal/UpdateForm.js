import React, { useState, useEffect } from 'react';
import './Update.css'

import * as postsActions from '../../store/posts';
import * as categoriesActions from '../../store/categories';

import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';

function UpdateFormModal({ setShowModal }) {
  // updateMode = true;
  // console.log('----------------------- updateMode', setUpdateMode)
  const postId = Number(useParams().postId);
  const dispatch = useDispatch();
  const history = useHistory()

  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');


  useEffect(() => {
    dispatch(categoriesActions.getCategories());
    // dispatch(postsActions.getOne())
  }, [dispatch]);

  const posts = useSelector(state => {
    return Object.values(state.posts.entries);
  });

  const categories = useSelector(state => {
    return Object.values(state.categories.entries);
  });

  const post = posts?.find(post => post?.id === postId);

  const handleUpdate = async e => {
    e.preventDefault();

    const updatedPost = await dispatch(postsActions.editPost({ postId, title, photo, category, content }));

    if (updatedPost) {
      dispatch(postsActions.getOne(postId));
      setShowModal(false);
      history.push(`/posts/${postId}`)
    }
  };

  const updatePhoto = e => {
    const file = e.target.files[0];
    if (file) setPhoto(file);
  };


  const updateTitle = e => setTitle(e.target.value);
  const updateContent = e => setContent(e.target.value);
  const updateCategory = e => setCategory(e.target.value);

  return (
    <div className='update-post'>
      <span className='edit-warning'>You have to update title and content, the developer will update soon 🙂</span>
      {photo && (
        <img
          className='update-image'
          src={URL.createObjectURL(photo)}
          alt='post'
        />
      )}
      <form className='update-form' onSubmit={handleUpdate}>
        <div className='update-form-info'>
          <label htmlFor='fileInput'>
            <i className="update-icon fa-solid fa-plus"></i>
            </label>
            <input
              type='file'
              id='fileInput'
              style={{display: 'none'}}
              onChange={updatePhoto}
            />
            <input
            className='update-input'
            type='text'
            defaultValue={post.title}
            autoFocus
            onChange={updateTitle}
          />
        </div>
        <div className='write-form-info'>
          <textarea
            className='update-input update-text'
            // placeholder={post?.content}
            type='text'
            // value={post.content}
            defaultValue={post.content}
            onChange={updateContent}
          />
          <select value={category} defaultValue='astrology' onChange={updateCategory} className='category-update'>
            <option selected hidden>Choose a category</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
        <button type='submit' className='update-submit'>
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateFormModal;
