import React from "react";
// import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
// import { AppShell } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AppShell> */}
      <Router />
      <Notifications />
      <ReactQueryDevtools initialIsOpen={false} />
      {/* </AppShell> */}
    </QueryClientProvider>
  );
};

export default App;
