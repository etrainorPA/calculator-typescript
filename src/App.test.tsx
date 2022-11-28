import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders history box", () => {
  render(<Layout />);
  const linkElemt = screen.getByTestId("history-tab");
  expect(linkElemt).toBeInTheDocument();
});

test("renders calculator box", () => {
  render(<Layout />);
  const linkElemt = screen.getByTestId("calculator-tab");
  expect(linkElemt).toBeInTheDocument();
});
