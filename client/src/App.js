import React from 'react';
// import MainContainer from './components/mainContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import CreateRequest from './pages/createRequest';
// import MobileNavBar from './components/mobileNavbar';
import HomePage from './pages/home';
import RequestDetails from './pages/requestDetails';
import RequestsList from './pages/requestsList';

function App() {
  return (
    <Router>
      {/* Start of Routes */}
      <NavBar />

      <Route exact path="/" component={HomePage} />

      <Route exact path="/requests" component={RequestsList} />

      <Route exact path="/request/view/:id" component={RequestDetails} />

      <Route exact path="/request/new" component={CreateRequest} />

      {/* End of Routes */}
    </Router>
  );
}

export default App;
