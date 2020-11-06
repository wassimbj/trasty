import React from 'react';
// import MainContainer from './components/mainContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar';
// import MobileNavBar from './components/mobileNavbar';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      {/* { window.innerWidth >= 800 ? <NavBar /> : <MobileNavBar /> } */}
      <NavBar />
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}

export default App;
