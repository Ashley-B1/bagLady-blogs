import { csrfFetch } from "./csrf";

const LOAD_ALL = 'users/loadAll';
const UPDATE_USER = 'user/update';
const DELETE_USER ='user/deleteUser'


const loadAll = users => {
  return {
    type: LOAD_ALL,
    users
  }
};

const updateUser = updatedUser => {
  return {
    type: UPDATE_USER,
    updatedUser
  }
}

const deleteUser = deletedUser => {
  return {
    type: DELETE_USER,
    deletedUser
  }
}

export const getAllUsers = () => async dispatch => {
  const res = await csrfFetch(`/api/users/`);

  if (res.ok) {
    // console.log('------------- THUNK', users)
    const users = await res.json();
    return dispatch(loadAll(users));
  }

  // return await res.json();
};

export const editUser = (payload) => async dispatch => {
  const { userId, username, email, password, profilePic } = payload;
  const formData = new FormData();

  formData.append('username', username);
  formData.append('email', email);
  formData.append('password', password);

  if (profilePic) formData.append('image', profilePic);

  const res = await csrfFetch(`/api/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: formData,
  });

  if (res.ok) {
    const user = await res.json();

    await dispatch(updateUser(user));

    return user;
  }
};

// delete user
export const removeUser = userId => async dispatch => {
  const res = await csrfFetch(`api/users/${userId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });

  if (res.ok) {
    // console.log('----------- DELETE', res)
    dispatch(deleteUser(userId));
  }
};

const initialState = { entries: {} };

const usersReducer = (state = initialState, action) => {
  let newState;
  let entries;

  switch (action.type) {
    case LOAD_ALL:
      newState = { ...state };
      entries = {};
      action.users.forEach(user => entries[user.id] = user);
      newState.entries = entries;
      return newState
    case UPDATE_USER:
      newState = {...state};
      entries = { ...state.entries };
      entries[action.updatedUser.id] = action.updatedUser;
      newState.entries = entries;
      return newState;
    case DELETE_USER:
      newState = { ...state };
      // console.log('---------------- THUNK', action)
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
