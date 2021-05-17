import * as React from "react";

interface Props {
  participants: Participant[];
  updateParticipants: Function;
}

export const FilterParticipants: React.FunctionComponent<Props> = ({
  participants,
  updateParticipants,
}) => {
  const [visible, setVisible] = React.useState(false);

  const [currentParticipants, setCurrentParticipants] =
    React.useState(participants);

  const toggleParticipantsBox = () => {
    setVisible(!visible);
  };

  const toggleCheckAndSetCurrentParticipants = (event: any) => {
    const { value } = event.target;
    const newParticipants = currentParticipants.map((participant) => {
      return {
        name: participant.name,
        isChecked:
          participant.name === value
            ? !participant.isChecked
            : participant.isChecked,
      };
    });
    setCurrentParticipants(newParticipants);
  };

  const updateParticipantsState = () => {
    toggleParticipantsBox();
    updateParticipants(currentParticipants);
  };

  return (
    <>
      <div className="participants input-text">
        <div className="participants__title" onClick={toggleParticipantsBox}>
          <div>Qui a faim ?</div>
        </div>

        <div
          className={`participants__name ${visible ? "show-participants" : ""}`}
        >
          {currentParticipants.map((participant, index) => (
            <div key={index} className="participant">
              <input
                className="participant__checkbox"
                type="checkbox"
                name="dropdown-group"
                value={participant.name}
                checked={participant.isChecked}
                onChange={toggleCheckAndSetCurrentParticipants}
              />
              {participant.name}
            </div>
          ))}
          <div className="close-select" onClick={updateParticipantsState}>
            OK
          </div>
        </div>
      </div>
    </>
  );
};
