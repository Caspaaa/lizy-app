import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Filter } from "./Filter";

describe("Filter", () => {
  test("selecting option in radius field calls updateRadius", () => {
    const myMock = jest.fn();

    render(
      <Filter
        search={{
          location: null,
          radius: 500,
          priceRange: 1,
          participants: [{ name: "Gilles", isChecked: true }],
        }}
        fetchRestaurants={() => {}}
        updateCoords={() => {}}
        updateRadius={myMock}
        updateParticipants={() => {}}
        updatePriceRange={() => {}}
        isBoxed={false}
      />
    );

    userEvent.selectOptions(screen.getByRole("combobox"), "500");

    expect(myMock).toHaveBeenCalled();
  });
});
