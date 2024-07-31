// src/components/Dashboard/Dashboard.tsx

import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="reservations/new">New Reservation</Link>
          </li>
          <li>
            <Link to="reservations/calendar">Booking Calendar</Link>
          </li>
          <li>
            <Link to="reservations/list">Booking List</Link>
          </li>
          <li>
            <Link to="guests/list">Guest List</Link>
          </li>
          <li>
            <Link to="rooms/list">Room List</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
