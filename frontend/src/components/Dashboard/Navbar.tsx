import React from "react";
import { AppShell, NavLink } from "@mantine/core";
import { useLocation } from "react-router-dom";
import router from "src/routes";
import NavbarRoutes from "src/routes/navbarRoutes";
// import DashboardRoutes from "src/routes/NavbarRoutes";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();

  console.log("router", router);
  return (
    <AppShell.Navbar p="md">
      {NavbarRoutes?.map(
        (route, index) =>
          route.path && (
            <NavLink
              key={index}
              href={route.path}
              label={route.label}
              leftSection={route.icon}
              childrenOffset={38}
              active={location.pathname === route.path}
              mb={10}
            >
              {route?.children?.map(
                (child, childIndex) =>
                  child?.path && (
                    <NavLink
                      key={childIndex}
                      href={child.path}
                      label={child.label}
                      active={location.pathname === child.path}
                    />
                  )
              )}
            </NavLink>
          )
      )}
    </AppShell.Navbar>
  );
};

export default Navbar;
