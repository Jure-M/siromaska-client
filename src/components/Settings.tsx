// styles
import './settings.scss';

// global imports
import React from 'react';

// components
import DashboardHeader from './DashboardHeader';
import UserDashboard from './user/UserDashboard';
import UnitDashboard from './units/UnitDashboard';

const Settings = () => (
  <div>
    <DashboardHeader title="Settings" />
    <UserDashboard />
    <UnitDashboard />
  </div>
);
export default Settings;
