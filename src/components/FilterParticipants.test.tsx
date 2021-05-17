import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FilterParticipants } from "./FilterParticipants";

describe("FilterParticipant", () => {
  test("clicking OK button of participants list calls updateParticipant", () => {
    const myMock = jest.fn();

    render(
      <FilterParticipants
        participants={[
          { name: "Gilles", isChecked: true },
          { name: "Vince", isChecked: true },
        ]}
        updateParticipants={myMock}
      />
    );

    userEvent.click(screen.getByTestId("updateParticipantsState"));

    expect(myMock).toHaveBeenCalled();
  });
});
