import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/form/Form.jsx";

describe("Form", () => {
  const mockAddTodo = jest.fn();

  beforeEach(() => {
    mockAddTodo.mockClear();
  });

  test("renders the form input and button", () => {
    render(<Form addTodo={mockAddTodo} />);
    const todoInput = screen.getByPlaceholderText("Add new task");
    const todoButton = screen.getByRole("button", { name: "Add Task" });
    expect(todoInput).toBeInTheDocument();
    expect(todoButton).toBeInTheDocument();
  });

  test("updates the state with input value", () => {
    render(<Form addTodo={mockAddTodo} />);
    const todoInput = screen.getByPlaceholderText("Add new task");
    fireEvent.change(todoInput, { target: { value: "New task" } });
    expect(todoInput.value).toBe("New task");
  });

  test("calls the addTodo function when the form is submitted", () => {
    render(<Form addTodo={mockAddTodo} />);
    const todoInput = screen.getByPlaceholderText("Add new task");
    const todoButton = screen.getByRole("button", { name: "Add Task" });
    fireEvent.change(todoInput, { target: { value: "New task" } });
    fireEvent.click(todoButton);
    expect(mockAddTodo).toHaveBeenCalledWith("New task");
  });

  test("clears input when form is submitted", () => {
    const { getByPlaceholderText, getByRole } = render(
      <Form addTodo={() => {}} />
    );
    const input = getByPlaceholderText("Add new task");
    const todoButton = getByRole("button");
    fireEvent.change(input, { target: { value: "New todo" } });
    fireEvent.click(todoButton);
    expect(input).toHaveValue("");
  });
});
