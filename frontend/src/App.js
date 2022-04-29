import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Switch,
  Route,
} from 'react-router-dom';

import NavBar from "./components/NavBar";
import SplashPage from "./components/pages/SplashPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import PostPage from "./components/pages/PostPage";
import WritePage from "./components/pages/WritePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import UserProfile from "./components/pages/UserProfile";
import CategoryPage from "./components/pages/CategoryPage";
import UserPostPage from "./components/pages/UserPostPage";

import * as sessionActions from './store/session'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <NavBar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SplashPage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/contact'>
            <ContactPage />
          </Route>
          <Route path='/posts/:postId'>
            <PostPage />
          </Route>
          <Route path='/write'>
            <WritePage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
          <Route exact path='/users/:userId'>
            <UserProfile />
          </Route>
          <Route path='/users/:userId/posts'>
            <UserPostPage />
          </Route>
          <Route path='/categories/:categoryId'>
            <CategoryPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
