import { csrfFetch } from './csrf';

const CREATE_POST = 'posts/setPost';
const LOAD_ONE = 'posts/loadOne';
const LOAD_ALL = 'posts/loadAll';
const DELETE_POST = 'post/removePost';
const UPDATE_POST = 'post/update';
const LOAD_USER_POSTS = 'posts/getUserPosts'

const setPost = post => {
  return {
    type: CREATE_POST,
    post
  }
};

const loadOne = post => {
  return {
    type: LOAD_ONE,
    post
  }
};

const loadAll = posts => {
  return {
    type: LOAD_ALL,
    posts
  }
};

const loadUserPosts = userPosts => {
  return {
    type: LOAD_USER_POSTS,
    userPosts
  }
};

const removePost = removedPost => {
  return {
    type: DELETE_POST,
    removedPost
  }
}

const updatePost = updatedPost => {
  return {
    type: UPDATE_POST,
    updatedPost
  }
}

// get all posts
export const getAllPost = () => async dispatch => {
  const res = await csrfFetch(`/api/posts/`);

  if (res.ok) {
    const posts = await res.json();

    return dispatch(loadAll(posts));
  }

  // console.log('------------------- THUNK', res);
  return await res.json();
};

// get one post
export const getOne = (postId) => async dispatch => {
  const res = await csrfFetch(`/api/posts/${postId}`);
  if (res.ok) {
    const post = await res.json();
    // console.log('---------------------------- REDUX', post)
    return dispatch(loadOne(post));
  }

  return await res.json();
};

// get all post of a certain user
export const fetchUserPosts = userId => async dispatch => {
  const res = await csrfFetch(`/api/users/${userId}/posts`);
  if (res.ok) {
    const posts = await res.json();
    return dispatch(loadUserPosts(posts));
  }

  return await res.json();
};

// create a post
export const createPost = payload => async dispatch => {
  const { userId, content, title, photo, category } = payload;
  const formData = new FormData();
  formData.append('content', content);
  formData.append('title', title);
  formData.append('userId', userId);
  formData.append('category', category);

  if (photo) formData.append('image', photo);

  const res = await csrfFetch(`/api/posts/`, {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: formData,
  });

  const post = await res.json();

  if (res.ok) {
    await dispatch(setPost(post));

    return post;
  }
};

// update post
export const editPost = payload => async dispatch => {
  const { postId, content, title, photo, category } = payload;
  const formData = new FormData();
  formData.append('content', content);
  formData.append('title', title);
  formData.append('postId', postId);
  formData.append('category', category);

  if (photo) formData.append('image', photo);

  const res = await csrfFetch(`/api/posts/${postId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: formData,
  });

  if (res.ok) {
    const revisedPost = await res.json();
    dispatch(updatePost(revisedPost));
    return revisedPost;
  }
};

// delete post
export const deletePost = (postId) => async dispatch => {
  const res = await csrfFetch(`/api/posts/${postId}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  });

  if (res.ok) {
    dispatch(removePost(postId));
  }
};

const initialState = { entries: {}, userPosts: {} };

const postsReducer = (state = initialState, action) => {
  let newState;
  let entries;
  let userPosts;

  switch (action.type) {
    case LOAD_ALL:
      newState = { ...state };
      entries = {};
      action.posts.forEach(post => entries[post.id] = post);
      newState.entries = entries;
      return newState;
    case LOAD_ONE:
      newState = { ...state };
      entries = {};
      entries[action.post.id] = action.post;
      newState.entries = entries;
      return newState;
    case LOAD_USER_POSTS:
      newState = { ...state };
      userPosts = {};
      action.userPosts.forEach(post => userPosts[post.id] = post);
      newState.userPosts = userPosts;
      return newState
    case CREATE_POST:
      newState = { ...state };
      newState.entries = { [action.post.id]: action.post };
      return newState;
    case UPDATE_POST:
      newState = { ...state };
      entries = { ...state.entries };
      entries[action.updatedPost.id] = action.updatedPost;
      newState.entries = entries;
      return newState;
    case DELETE_POST:
      newState = {...state};
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
