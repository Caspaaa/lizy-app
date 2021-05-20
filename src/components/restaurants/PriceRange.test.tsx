import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PriceRange } from "./PriceRange";

describe("PriceRange", () => {
  test("clicking on a PriceRangeButton calls handlePriceRangeChange", () => {
    const myMock = jest.fn();

    render(<PriceRange priceRange={2} updatePriceRange={myMock} />);

    userEvent.click(screen.getAllByRole("button")[0]);

    userEvent.click(screen.getAllByRole("button")[1]);

    userEvent.click(screen.getAllByRole("button")[2]);

    userEvent.click(screen.getAllByRole("button")[3]);

    expect(myMock).toHaveBeenCalledTimes(4);
  });
});
