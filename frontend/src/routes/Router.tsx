// src/routes.tsx
import { RouteObject, RouterProvider } from "react-router-dom";
import {
  ROUTE_HOME,
  ROUTE_RESERVATIONS_NEW,
  ROUTE_RESERVATIONS_CALENDAR,
  ROUTE_RESERVATIONS_LIST,
  ROUTE_GUESTS_LIST,
  ROUTE_GUESTS_PROFILE,
  ROUTE_ROOMS_LIST,
  ROUTE_ROOMS_DETAILS,
  ROUTE_ROOMS_HOUSEKEEPING,
  ROUTE_BILLING_GENERATE,
  ROUTE_BILLING_INVOICE,
  ROUTE_POS,
  ROUTE_REPORTS,
  ROUTE_USERS_LIST,
  ROUTE_USERS_PROFILE,
  ROUTE_LOGIN,
  ROUTE_REGISTER,
  ROUTE_NOT_FOUND,
  ROUTE_RESERVATIONS,
  ROUTE_GUESTS,
  ROUTE_ROOMS,
  ROUTE_BILLING,
  ROUTE_USERS,
} from "src/common";

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
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Define routes with custom properties
const routes: RouteObject[] = [
  {
    path: ROUTE_HOME,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ROUTE_RESERVATIONS,

        children: [
          {
            path: ROUTE_RESERVATIONS_NEW,
            element: <ReservationForm />,
          },
          {
            path: ROUTE_RESERVATIONS_CALENDAR,
            element: <BookingCalendar />,
          },
          {
            path: ROUTE_RESERVATIONS_LIST,
            element: <BookingList />,
          },
        ],
      },
      {
        path: ROUTE_GUESTS,

        children: [
          {
            path: ROUTE_GUESTS_LIST,
            element: <GuestList />,
          },
          {
            path: ROUTE_GUESTS_PROFILE,
            element: <GuestProfile />,
          },
        ],
      },
      {
        path: ROUTE_ROOMS,

        children: [
          {
            path: ROUTE_ROOMS_LIST,
            element: <RoomList />,
          },
          {
            path: ROUTE_ROOMS_DETAILS,
            element: <RoomDetails />,
          },
          {
            path: ROUTE_ROOMS_HOUSEKEEPING,
            element: <Housekeeping />,
          },
        ],
      },
      {
        path: ROUTE_BILLING,

        children: [
          {
            path: ROUTE_BILLING_GENERATE,
            element: <Billing />,
          },
          {
            path: ROUTE_BILLING_INVOICE,
            element: <Invoice />,
          },
        ],
      },
      {
        path: ROUTE_POS,
        element: (
          <ProtectedRoute>
            <POS />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTE_REPORTS,
        element: (
          <ProtectedRoute>
            <AnalyticsDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTE_USERS,

        children: [
          {
            path: ROUTE_USERS_LIST,
            element: <UserList />,
          },
          {
            path: ROUTE_USERS_PROFILE,
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
  {
    path: ROUTE_LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_REGISTER,
    element: <Register />,
  },
  {
    path: ROUTE_NOT_FOUND,
    element: <p>404 Error - Nothing here...</p>,
  },
];

const router = createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
