// src/routes/index.tsx

import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "src/components/Authentication/Login";
import Register from "src/components/Authentication/SignUp";
import Dashboard from "src/components/Dashboard/Dashboard";
import ReservationForm from "src/components/Reservation/ReservationForm";
import BookingCalendar from "src/components/Reservation/BookingCalendar";
import BookingList from "src/components/Reservation/BookingList";
import GuestList from "src/components/GuestManagement/GuestList";
import GuestProfile from "src/components/GuestManagement/GuestProfile";
import RoomList from "src/components/RoomManagement/RoomList";
import RoomDetails from "src/components/RoomManagement/RoomDetails";
import Housekeeping from "src/components/RoomManagement/HouseKeeping";
import Billing from "src/components/Billing/Billing";
import Invoice from "src/components/Billing/Invoice";
import POS from "src/components/POS/POS";
import AnalyticsDashboard from "src/components/Reports/Analytics";
import UserList from "src/components/UserManagement/UserList";
import UserProfile from "src/components/UserManagement/UserProfile";

// Define the routes with type safety
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />, // The main dashboard
    children: [
      // Nested routes for better organization
      {
        path: "reservations",
        children: [
          { path: "new", element: <ReservationForm /> },
          { path: "calendar", element: <BookingCalendar /> },
          { path: "list", element: <BookingList /> },
        ],
      },
      {
        path: "guests",
        children: [
          { path: "list", element: <GuestList /> },
          { path: ":guestId", element: <GuestProfile /> },
        ],
      },
      {
        path: "rooms",
        children: [
          { path: "list", element: <RoomList /> },
          { path: ":roomId", element: <RoomDetails /> },
          { path: "housekeeping", element: <Housekeeping /> },
        ],
      },
      {
        path: "billing",
        children: [
          { path: "generate", element: <Billing /> },
          { path: ":invoiceId", element: <Invoice /> },
        ],
      },
      {
        path: "pos",
        element: <POS />,
      },
      {
        path: "reports",
        element: <AnalyticsDashboard />,
      },
      {
        path: "users",
        children: [
          { path: "list", element: <UserList /> },
          { path: "profile", element: <UserProfile /> },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
];

// Create and export the router
const router = createBrowserRouter(routes);

export default router;
