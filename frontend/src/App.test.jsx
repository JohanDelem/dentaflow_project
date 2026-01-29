import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("affiche DentaFlow", () => {
  render(<App />);
  expect(screen.getByText(/dentaflow/i)).toBeInTheDocument();
});
