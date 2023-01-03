import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const linkElement2 = screen.getByText(/Hello Vijay/i);
  expect(linkElement2).toBeInTheDocument();

  const linkElement3 = screen.getByText(/Search/i);
  expect(linkElement3).toBeInTheDocument();
});
