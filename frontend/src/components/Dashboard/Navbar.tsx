import React, { useMemo } from "react";
import { AppShell, NavLink } from "@mantine/core";
import { useLocation, NavLink as RouterNavLink } from "react-router-dom";
import router from "src/routes";
import NavbarRoutes from "src/routes/NavbarRoutes";
// import NavbarRoutes from "src/routes/navbarRoutes";
// import DashboardRoutes from "src/routes/NavbarRoutes";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();
  const memoizedRoutes = useMemo(() => NavbarRoutes, []);
  console.log("router", router);
  return (
    <AppShell.Navbar p="md">
      {memoizedRoutes?.map(
        (route, index) =>
          route.path && (
            <NavLink
              key={index}
              component={RouterNavLink} // Use RouterNavLink for client-side routing
              to={route.path}
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
                      component={RouterNavLink} // React Router's NavLink for child routes
                      to={child.path}
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
