import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";

import "./PostTop.css";
import { Modal } from "../../../../../../context/Modal";
import UpdateForm from '../../../../../UpdatePostModal/UpdateForm';

import * as postsActions from "../../../../../../store/posts";
import * as usersActions from "../../../../../../store/users";
// import * as sessionActions from "../../../../../../store/session";

const PostTop = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const postId = Number(useParams().postId);

  const [showModal, setShowModal] = useState(false);

  const sessionUser = useSelector((state) => state.session.user);

  const posts = useSelector((state) => {
    return Object.values(state.posts.entries);
  });

  const users = useSelector((state) => {
    return Object.values(state.users.entries);
  });

  const post = posts?.find((post) => post.id === postId);

  const user = users?.find((user) => user.id === post?.userId);

  useEffect(() => {
    dispatch(postsActions.getAllPost());
  }, [dispatch]);

  useEffect(() => {
    dispatch(usersActions.getAllUsers());
  }, [dispatch]);

  const handleDelete = async (e) => {
    e.preventDefault();

    dispatch(postsActions.deletePost(postId));
    history.push("/");
  };

  let postLinks;

  if (post?.userId === sessionUser?.id) {
    postLinks = (
      <div className="sp-edit">
        <i className="sp-icon fa-solid fa-pen-to-square" onClick={() => setShowModal(true)}></i>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <UpdateForm setShowModal={setShowModal} />
          </Modal>
        )}
        <i className="sp-icon fa-solid fa-trash-can" onClick={handleDelete}></i>
      </div>
    )
  };

  return (
    <div className="post-top">
      <div className="sp-post-info">
        <h2 className="sp-post-title">{post?.title}</h2>
        <div className="sp-info">
          <span className="sp-post-author">
            Written By:
            <Link className="link" to={`/users/${user?.id}/posts`}>
              <b>{user?.username}</b>
            </Link>
          </span>
          <span className="sp-post-date">
            <i>{new Date(post?.createdAt).toDateString()}</i>
          </span>
        </div>
      </div>
      {postLinks}
    </div>
  );
};

export default PostTop;
