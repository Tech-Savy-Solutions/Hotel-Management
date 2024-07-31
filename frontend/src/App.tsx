import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
