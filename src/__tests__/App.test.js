import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Your code here/i);
  expect(linkElement).toBeInTheDocument();
});
