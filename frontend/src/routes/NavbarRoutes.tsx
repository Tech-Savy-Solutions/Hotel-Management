// src/routes.tsx
import {
  IconBook,
  IconDashboard,
  IconFileInvoice,
  IconGraph,
  IconHttpPost,
  IconLamp,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";
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
  ROUTE_RESERVATIONS,
  ROUTE_GUESTS,
  ROUTE_ROOMS,
  ROUTE_BILLING,
  ROUTE_USERS,
  ROUTE_HOME_LABEL,
  ROUTE_RESERVATIONS_LABEL,
  ROUTE_RESERVATIONS_NEW_LABEL,
  ROUTE_RESERVATIONS_CALENDAR_LABEL,
  ROUTE_RESERVATIONS_LIST_LABEL,
  ROUTE_GUESTS_LABEL,
  ROUTE_GUESTS_LIST_LABEL,
  ROUTE_GUESTS_PROFILE_LABEL,
  ROUTE_ROOMS_LABEL,
  ROUTE_ROOMS_LIST_LABEL,
  ROUTE_ROOMS_DETAILS_LABEL,
  ROUTE_ROOMS_HOUSEKEEPING_LABEL,
  ROUTE_BILLING_LABEL,
  ROUTE_BILLING_GENERATE_LABEL,
  ROUTE_BILLING_INVOICE_LABEL,
  ROUTE_POS_LABEL,
  ROUTE_REPORTS_LABEL,
  ROUTE_USERS_LABEL,
  ROUTE_USERS_LIST_LABEL,
} from "src/common";

const NavbarRoutes = [
  {
    path: ROUTE_HOME,
    label: ROUTE_HOME_LABEL,
    icon: <IconDashboard />,
  },
  {
    path: ROUTE_RESERVATIONS,
    label: ROUTE_RESERVATIONS_LABEL,
    icon: <IconBook />,
    children: [
      {
        path: ROUTE_RESERVATIONS_NEW,
        label: ROUTE_RESERVATIONS_NEW_LABEL,
      },
      {
        path: ROUTE_RESERVATIONS_CALENDAR,
        label: ROUTE_RESERVATIONS_CALENDAR_LABEL,
      },
      {
        path: ROUTE_RESERVATIONS_LIST,
        label: ROUTE_RESERVATIONS_LIST_LABEL,
      },
    ],
  },
  {
    path: ROUTE_GUESTS,
    label: ROUTE_GUESTS_LABEL,
    icon: <IconUsersGroup />,
    children: [
      {
        path: ROUTE_GUESTS_LIST,
        label: ROUTE_GUESTS_LIST_LABEL,
      },
      {
        path: ROUTE_GUESTS_PROFILE,
        label: ROUTE_GUESTS_PROFILE_LABEL,
      },
    ],
  },
  {
    path: ROUTE_ROOMS,
    label: ROUTE_ROOMS_LABEL,
    icon: <IconLamp />,
    children: [
      {
        path: ROUTE_ROOMS_LIST,
        label: ROUTE_ROOMS_LIST_LABEL,
      },
      {
        path: ROUTE_ROOMS_DETAILS,
        label: ROUTE_ROOMS_DETAILS_LABEL,
      },
      {
        path: ROUTE_ROOMS_HOUSEKEEPING,
        label: ROUTE_ROOMS_HOUSEKEEPING_LABEL,
      },
    ],
  },
  {
    path: ROUTE_BILLING,
    label: ROUTE_BILLING_LABEL,
    icon: <IconFileInvoice />,
    children: [
      {
        path: ROUTE_BILLING_GENERATE,
        label: ROUTE_BILLING_GENERATE_LABEL,
      },
      {
        path: ROUTE_BILLING_INVOICE,
        label: ROUTE_BILLING_INVOICE_LABEL,
      },
    ],
  },
  {
    path: ROUTE_POS,
    label: ROUTE_POS_LABEL,
    icon: <IconHttpPost />,
  },
  {
    path: ROUTE_REPORTS,
    label: ROUTE_REPORTS_LABEL,
    icon: <IconGraph />,
  },
  {
    path: ROUTE_USERS,
    label: ROUTE_USERS_LABEL,
    icon: <IconUser />,
    children: [
      {
        path: ROUTE_USERS_LIST,
        label: ROUTE_USERS_LIST_LABEL,
      },
    ],
  },
];

export default NavbarRoutes;
