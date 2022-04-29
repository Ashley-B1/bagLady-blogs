import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import './WritePage.css';

import * as postsActions from '../../../store/posts';
import * as categoriesActions from '../../../store/categories';

const WritePage = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser?.id;

  const handleSubmit = async e => {
    e.preventDefault();
    let newErrors = [];

    const newPost = await dispatch(postsActions.createPost({ userId, title, content, photo, category }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
    if (newPost) {
      dispatch(postsActions.getOne(newPost.id));
      history.push(`/posts/${newPost.id}`);
    }

  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(file);
  };

  // const [validationErrors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(categoriesActions.getCategories());
    dispatch(postsActions.getOne())
  }, [dispatch]);

  const categories = useSelector(state => {
    return Object.values(state.categories.entries);
  });


  if (!sessionUser) return (
    <Redirect to='/signup' />
  )

  const createContent = e => setContent(e.target.value);
  const createTitle = e => setTitle(e.target.value);
  const selectCategory = e => setCategory(e.target.value);

  return (
    <div className='write-page'>
      {photo && (
        <img
          className='write-image'
          src={URL.createObjectURL(photo)}
          alt='post'
        />
      )}
      <form onSubmit={handleSubmit} className='write-form'>
        <div className='write-form-info'>
          <label htmlFor='fileInput'>
            <i className="write-icon fa-solid fa-plus"></i>
            </label>
            <input
              type='file'
              id='fileInput'
              style={{display: 'none'}}
              onChange={updateFile}
            />
            <input
            type='text'
            placeholder='Title'
            className='write-input'
            autoFocus={true}
            value={title}
            onChange={createTitle}
          />
        </div>
        <div className='write-form-info'>
          <textarea
            placeholder='Tell us your story...'
            type='text'
            className='write-input write-text'
            value={content}
            onChange={createContent}
          />
          <select value={category} onChange={selectCategory} className='category-selector'>
            <option selected disabled>Choose a category</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
        <button type='submit' className='write-submit'>
          PUBLISH
        </button>
      </form>
    </div>
  );
};

export default WritePage;
