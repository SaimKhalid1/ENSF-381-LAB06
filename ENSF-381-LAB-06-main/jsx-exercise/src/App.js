import React from 'react';
import Dashboard from './Dashboard';
import InfoPage from './InfoPage';
import ReachOut from './ReachOut';
import './MainApplicationRoot.css';
import EngineeringTopics from './EngineeringTopics';

def MainApplicationRoot() {

  let presentYear = new Date().getFullYear();
  let userStatus = true;

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current Year: {presentYear}</p>
      {userStatus ? <p>Welcome back!</p> : <p>Please log in.</p>}

      <Dashboard heading="Dashboard Page" details="Welcome to our website." />
      <InfoPage heading="InfoPage Us" details="We are passionate about delivering quality experiences." />
      <ReachOut heading="ReachOut Us" details="Feel free to reach out to us via email or phone." />
      <EngineeringTopics/>
    </div>

    
  );
}

export default MainApplicationRoot