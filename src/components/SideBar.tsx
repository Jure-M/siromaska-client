// style
import './sideBar.scss';

// global import
import React from 'react';
import { Link } from 'react-router-dom';

import { BsCalendar } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { FaWalking } from 'react-icons/fa';

const SideBar = () => (
  <aside className="sidebar">
    <nav className="sidebar__nav">
      <ul className="sidebar__nav-list">
        <li className="sidebar__nav-item">
          <Link to="/dashboard/">
            <FaWalking />
          </Link>
        </li>
        <li className="sidebar__nav-item">
          <Link to="/dashboard/calendar">
            <BsCalendar />
          </Link>
        </li>
        <li className="sidebar__nav-item">
          <Link to="/dashboard/settings">
            <FiSettings />
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default SideBar;
