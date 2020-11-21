import React from 'react';
// import MainContainer from './components/mainContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import MobileNavBar from './components/mobileNavbar';
import CreateRequest from './pages/createRequest';
// import MobileNavBar from './components/mobileNavbar';
import HomePage from './pages/home';
import RequestDetails from './pages/requestDetails';
import RequestsList from './pages/requestsList';
// import Trips from './pages/trips';
import UserProfile from './pages/userProfile';
import MyRequests from './pages/myRequests';
import Messages from './pages/messages';

function App() {
  return (
    <Router>
      {/* Start of Routes */}
      <NavBar />
      <MobileNavBar />

      <Route exact path="/" component={HomePage} />

      <Route exact path="/requests" component={RequestsList} />

      <Route exact path="/request/view/:id" component={RequestDetails} />

      <Route exact path="/request/new" component={CreateRequest} />

      {/* <Route exact path="/trips" component={Trips} /> */}

      <Route exact path={['/user/:id', '/user/:id/:tab']} component={UserProfile} />

      <Route exact path="/my/requests" component={MyRequests} />

      <Route exact path={['/messages', '/messages/:to/']} component={Messages} />

      {/* End of Routes */}
    </Router>
  );
}

export default App;
