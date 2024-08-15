import { ScrollArea } from "@mantine/core";
import React from "react";

interface AppShellContainerProps {
  children: React.ReactNode;
}

const AppShellContainer: React.FC<AppShellContainerProps> = ({ children }) => {
  return (
    <ScrollArea
      style={{
        height: "calc(100vh - var(--app-shell-header-height))", // viewport height - height of header - height of footer
      }}
    >
      {children}
    </ScrollArea>
  );
};

export default AppShellContainer;
