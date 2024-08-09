import React from "react";
import { AppShell, NavLink } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();
  const navLinks = [
    { path: "/reservations/new", label: "Reservations" },
    { path: "/reservations/calendar", label: "Booking Calendar" },
    { path: "/reservations/list", label: "Booking List" },
    { path: "/guests/list", label: "Guest List" },
    { path: "/rooms/list", label: "Room List" },
  ];

  return (
    <AppShell.Navbar p="md">
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          component={Link} // Use Link component for navigation
          to={link.path} // Use `to` prop instead of `href`
          label={link.label}
          leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          active={location.pathname === link.path}
        />
      ))}
    </AppShell.Navbar>
  );
};

export default Navbar;
