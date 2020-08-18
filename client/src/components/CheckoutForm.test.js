import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm.js";

import PlantList from "./PlantList";
import ShoppingCart from "./ShoppingCart";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

// test("renders greeting on Greeting component", async () => {
// //         // Arrange
//   const { getByText } = render(<Greeting />);
// //        // Act
//   const greeting = getByText(/hello lambdalorians!/i);
// //         // Assert
//   expect(greeting).toBeInTheDocument();
// });

test("form header renders", async () => {
  const { getByText, getById } = render(<CheckoutForm />);

  const header = getById(/checkout form /i);

  expect(header).toBeTruthy();
});
//////////////////////////////////////////////////////////
//

test("form shows success message on submit with form details", () => {
  const { getByText, getById } = render(<CheckoutForm />);

  fireEvent.click(getById("successMessage"));
  const successMessage = getByText(/Your new green friends will be shipped to:/i)
    

  expect(successMessage).toBeTruthy();
});

// test("Plant exists", () => {
//   const { findByText } = render(<CheckoutForm />);
//   findByText(/plant name/i);
// });
