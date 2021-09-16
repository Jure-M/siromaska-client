import './dashboardHeader.scss';

import React from 'react';

interface IDashBoardHeader {
  title: string;
}

const DashboardHeader: React.FC<IDashBoardHeader> = ({ title }) => (
  <div className="dash-header">
    <h3 className="dash-header__title">{title}</h3>
  </div>
);
export default DashboardHeader;
