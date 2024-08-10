import { ScrollArea } from "@mantine/core";
import React from "react";
import { COLOR_KEYS } from "..";

interface AppShellContainerProps {
  children: React.ReactNode;
}

const AppShellContainer: React.FC<AppShellContainerProps> = ({ children }) => {
  return (
    <ScrollArea
      style={{
        height: "calc(100vh - var(--app-shell-header-height))", // viewport height - height of header - height of footer
      }}
      bg={COLOR_KEYS.LIGHT_BLUE}
    >
      {children}
    </ScrollArea>
  );
};

export default AppShellContainer;
