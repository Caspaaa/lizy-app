import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PriceRangeButton } from "./PriceRangeButton";

describe("PriceRangeButton", () => {
  test("button displays the € sign", () => {
    render(
      <PriceRangeButton
        priceRange={1}
        value={1}
        handlePriceRangeChange={() => {}}
      />
    );

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("€");
  });

  test("button has the right state value", () => {
    render(
      <PriceRangeButton
        priceRange={2}
        value={4}
        handlePriceRangeChange={() => {}}
      />
    );

    const buttonValue = screen.getByRole("button").getAttribute("value");

    expect(buttonValue).toEqual("4");
  });

  test("button gets the active class when its value is < to current priceRange", () => {
    render(
      <PriceRangeButton
        priceRange={2}
        value={1}
        handlePriceRangeChange={() => {}}
      />
    );

    const button = screen.getByRole("button");

    expect(button).toHaveClass("price-range-button--active");
  });

  test("button gets the active class when its value is > to current priceRange", () => {
    render(
      <PriceRangeButton
        priceRange={2}
        value={3}
        handlePriceRangeChange={() => {}}
      />
    );

    const button = screen.getByRole("button");

    expect(button).not.toHaveClass("price-range-button--active");
  });

  test("button gets the active class when its value is = to current priceRange", () => {
    render(
      <PriceRangeButton
        priceRange={2}
        value={2}
        handlePriceRangeChange={() => {}}
      />
    );

    const button = screen.getByRole("button");

    expect(button).toHaveClass("price-range-button--active");
  });

  test("click on button execute handlePriceRangeChange", () => {
    const myMock = jest.fn();
    render(
      <PriceRangeButton
        priceRange={2}
        value={4}
        handlePriceRangeChange={myMock}
      />
    );

    userEvent.click(screen.getByRole("button"));

    expect(myMock).toHaveBeenCalled();
  });
});
