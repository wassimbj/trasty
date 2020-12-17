import React, { useEffect, useState } from 'react';
// import MainContainer from './components/mainContainer';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import getLoggedInUser from './api/user/getLoggedInUser';
import logOut from './api/user/logOut';
// Components
import Spinner from './components/spinner';
// Pages
import NavBar from './components/navbar';
import CreateRequest from './pages/createRequest';
import HomePage from './pages/home';
import RequestDetails from './pages/requestDetails';
import RequestsList from './pages/requestsList';
import UserProfile from './pages/userProfile';
import MyRequests from './pages/myRequests';
import Messages from './pages/messages';
import Login from './pages/auth/Login';
import UserAuthContext from './contexts/UserAuthContext';
import ErrorBoundary from './components/errorBoundary';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({
    loading: true,
    status: false,
  });
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  // get if user is logged in
  useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      const loggedInUser = await getLoggedInUser();
      setIsLoggedIn({
        loading: false,
        status: loggedInUser.isLoggedIn,
        userid: loggedInUser.data.id,
      });
    }());
  }, []);

  const logoutHandler = async () => {
    // make logout call to the api
    const res = logOut();
    if (res) {
      setIsLoggedIn({ loading: false, status: false });
      setIsLoggedOut(true);
    }
  };

  return (
    <Router>
      {
        isLoggedOut && <Redirect to="/" />
      }
      <UserAuthContext.Provider value={{ isLoggedIn }}>
        {/* Start of Routes */}
        <NavBar onClickLogout={logoutHandler} />
        <createGlobalStyle />
      <ErrorBoundary>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/requests" component={RequestsList} />

        <Route exact path="/request/view/:id" component={RequestDetails} />

        <Route
          exact
          path="/request/new"
          component={() => {
            if (isLoggedIn.loading) {
              return <Spinner width="30px" customStyle="margin-top: 5rem" center />;
            } if (!isLoggedIn.status) {
              return <Redirect to="/requests" />;
            }
            return <CreateRequest />;
          }}
        />

        <Route exact path={['/user/:id', '/user/:id/:tab']} component={UserProfile} />

        <Route
          exact
          path={['/my/requests', '/my/requests/:request_id']}
          component={() => {
            if (isLoggedIn.loading) {
              return <Spinner width="30px" customStyle="margin-top: 5rem" center />;
            } if (!isLoggedIn.status) {
              return <Redirect to="/requests" />;
            }
            return <MyRequests />;
          }}
        />

        <Route
          exact
          path={['/messages', '/messages/:room']}
          component={() => {
            if (isLoggedIn.loading) {
              return <Spinner width="30px" customStyle="margin-top: 5rem" center />;
            } if (!isLoggedIn.status) {
              return <Redirect to="/requests" />;
            }
            return <Messages />;
          }}
        />

        {/* Auth routes */}
        <Route
          exact
          path="/start"
          component={() => {
            if (isLoggedIn.loading) {
              return <Spinner width="30px" customStyle="margin-top: 5rem" center />;
            } if (isLoggedIn.status) {
              return <Redirect to="/requests" />;
            }
            return <Login />;
          }}
        />
      </ErrorBoundary>

        {/* End of Routes */}
      </UserAuthContext.Provider>
    </Router>
  );
}

export default App;
