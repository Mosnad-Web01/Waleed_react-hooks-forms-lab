import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("adds a new item to the list when the form is submitted", () => {
  const handleItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={handleItemFormSubmit} />);

  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.getByLabelText(/Category/i), {
    target: { value: "Dessert" },
  });

  fireEvent.click(screen.getByRole("button", { name: /Add to List/i }));

  expect(handleItemFormSubmit).toHaveBeenCalledWith(expect.any(Function));
});

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const handleSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.getByLabelText(/Category/i), {
    target: { value: "Dessert" },
  });

  fireEvent.click(screen.getByRole("button", { name: /Add to List/i }));

  expect(handleSubmit).toHaveBeenCalled();
});
