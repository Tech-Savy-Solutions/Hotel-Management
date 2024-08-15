// ./test-utils/render.tsx
import React from "react";
import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
// Import your theme object
import customtheme from "../src/theme/customtheme";

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={customtheme}>{children}</MantineProvider>
    ),
  });
}
