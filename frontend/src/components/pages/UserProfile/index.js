import React, {useState} from "react";
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./UserProfile.css";

import Footer from '../../Footer';
import * as usersActions from '../../../store/users';

const UserProfile = () => {
  // const defaultPic = 'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg';
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);


  const dispatch = useDispatch();
  const userId = Number(useParams().userId);


  const sessionUser =  useSelector(state => state.session.user);

  if (sessionUser?.id !== userId || !sessionUser) return <Redirect to='/' />

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = { userId, username, profilePic, email, password }
    const update = dispatch(usersActions.editUser(payload));

    if (update) {
      setSuccess(true)
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await dispatch(usersActions.removeUser(userId));
      window.location.replace('/');
    } catch(e) {}
  };

  return (
    <div className="user-profile">
      <div className="user-intro">
        <div className="user-pp">
          <img
            className="user-pic"
            src={profilePic ? URL.createObjectURL(profilePic) : sessionUser.profilePic}
            alt="user"
          />
        </div>
        <h2 className="user-greeting">Hello {`${sessionUser?.username}`}!</h2>
      </div>
      <div className="user-info">
        <h4 className="user-status">Tell us more about you.</h4>
        <div className="user-settings">
          <span className="user-update">Update Your Account</span>
          <span className="user-delete" onClick={handleDelete}>Delete Your Account</span>
        </div>
      </div>
      <form className="us-form" onSubmit={handleSubmit}>
        <div className="settings-left">
          <label>Profile Picture</label>
          <div className='pp-edit'>
            <img
              src={ profilePic ? URL.createObjectURL(profilePic) : sessionUser.profilePic }
              alt='profile-pic'
              />
            <label htmlFor="fileInput">
              <i className="user-icon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={e => setProfilePic(e.target.files[0])} />
          </div>
        </div>
        <div className="settings-right">
          <label>Username</label>
          <input value={username} placeholder={sessionUser.username} type="text" onChange={e => setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder={sessionUser.email} onChange={e => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
          <button className="settings-submit" type='submit'>Update</button>
          {success && <span style={{color: 'green', textAlign:'center', marginTop: '20px'}}>Profile has been updated...</span>}
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default UserProfile;
