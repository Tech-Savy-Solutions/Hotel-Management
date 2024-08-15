import React from "react";
// import { render, screen } from "@testing-library/react";
import Login from "../components/Authentication/Login";
import { STRINGS_CONSTANT } from "src/common";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "../../test-utils";

describe("Login", () => {
  const queryClient = new QueryClient();
  it("renders correctly", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(screen.getByText(STRINGS_CONSTANT.WELCOME)).toBeInTheDocument();
  });
});
