import { csrfFetch } from './csrf';

const LOAD_CATEGORIES = 'categories/loadCategories';
const LOAD_POSTS = 'categories/loadCategoryPosts';

const loadCategories = categories => {
  return {
    type: LOAD_CATEGORIES,
    categories,
  };
};

const loadCategoryPosts = categoryPosts => {
  return {
    type: LOAD_POSTS,
    categoryPosts,
  }
};

// get a list of all categories
export const getCategories = () => async (dispatch) => {
  const res = await csrfFetch(`/api/categories/`);

  if (res.ok) {
    const categories = await res.json();

    return dispatch(loadCategories(categories));
  }
  return await res.json();
};

// get all posts of a certain category
export const getPosts = (categoryId) => async dispatch => {
  const res = await csrfFetch(`/api/categories/${categoryId}`);

  if (res.ok) {
    const posts = await res.json();

    return dispatch(loadCategoryPosts(posts));
  }
  return await res.json()
};

const initialState = { entries: {}, posts: {} };

const categoriesReducer = (state = initialState, action) => {
  let newState;
  let entries;
  let posts;
  switch (action.type) {
    case LOAD_CATEGORIES:
      newState = { ...state };
      entries = {};
      action.categories.forEach(category => (entries[category.id] = category));
      newState.entries = entries;
      return newState;
    case LOAD_POSTS:
      newState = { ...state };
      posts = {};
      action.categoryPosts.forEach(post => posts[post.id] = post);
      newState.posts = posts;
      return newState;
    default:
      return state;
  }
};

export default categoriesReducer;
