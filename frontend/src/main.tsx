import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "src/index.scss";
import { MantineProvider } from "@mantine/core";
import customtheme from "./theme/customtheme.ts";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={customtheme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
