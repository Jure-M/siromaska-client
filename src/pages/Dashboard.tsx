import './dashboard.scss';

// global imports
import React from 'react';
import { Route } from 'react-router-dom';

// components
import AppBar from '../components/AppBar';
import SideBar from '../components/SideBar';
import Arrivals from '../components/Arrivals';
import Settings from '../components/Settings';
import Calendar from '../components/Calendar';

const Dashboard = () => (
  <div className="dashboard">
    <AppBar />
    <SideBar />
    <div className="dashboard__main">
      <Route exact path="/dashboard/">
        <Arrivals />
      </Route>
      <Route exact path="/dashboard/calendar">
        <Calendar />
      </Route>
      <Route exact path="/dashboard/settings">
        <Settings />
      </Route>
    </div>
  </div>
);
export default Dashboard;
