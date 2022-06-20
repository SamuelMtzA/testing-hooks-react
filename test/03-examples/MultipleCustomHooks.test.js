import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter")

describe("testing MultipleHook", () => {

  const mockIncrementFunction = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrementFunction
  });
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test("should return default values for the component", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Walter White", quote: "I'm your father" }],
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));
    
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton).toBeTruthy();
    
  });
  
  test("should show a quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Walter White", quote: "I'm your father" }],
      isLoading: false,
      hasError: null,
    });
    
    render(<MultipleCustomHooks />);
    // screen.debug();
    expect(screen.getByText("I'm your father")).toBeTruthy();
    expect(screen.getByText("Walter White")).toBeTruthy();
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
    
    
  });
  
  test('should call the increment function', () => { 


    useFetch.mockReturnValue({
      data: [{ author: "Walter White", quote: "I'm your father" }],
      isLoading: false,
      hasError: null,
    });
    
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);
    expect(mockIncrementFunction).toHaveBeenCalled();
  })
});
