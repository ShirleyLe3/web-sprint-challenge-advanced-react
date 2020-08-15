import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./components/CheckoutForm";
import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import App from "./App";

// Write up the two tests here and make sure they are testing what the title shows

// test("form header renders", () => {});

// test("form shows success message on submit with form details", () => {});

test("form header renders", () => {
  const { getByText } = render(<App />);

  getByText(/Plant 1/i);
});

test("form shows success message on submit with form details", () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText("Search"));
});

test("Plant exists", () => {
  const { findByText } = render(<App />);
  findByText(/plant name/i);
});
