import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import "@testing-library/jest-dom";

test("pizza checkbox is initially unchecked", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: /add pepperoni/i });
  expect(checkbox).not.toBeChecked();
});

test("toppings list initially contains only cheese", () => {
  render(<App />);
  const cheese = screen.getByText("cheese");
  expect(cheese).toBeInTheDocument();
});

test("clicking the checkbox adds pepperoni to the toppings list", async () => {
  render(<App />);
  const user = userEvent.setup();

  const checkbox = screen.getByRole("checkbox", { name: /add pepperoni/i });
  await user.click(checkbox);

  const pepperoni = screen.getByText("pepperoni");
  expect(pepperoni).toBeInTheDocument();
});

test("clicking the checkbox again removes pepperoni from the toppings list", async () => {
  render(<App />);
  const user = userEvent.setup();

  const checkbox = screen.getByRole("checkbox", { name: /add pepperoni/i });
  await user.click(checkbox); // add
  await user.click(checkbox); // remove

  const pepperoni = screen.queryByText("pepperoni");
  expect(pepperoni).not.toBeInTheDocument();
});
