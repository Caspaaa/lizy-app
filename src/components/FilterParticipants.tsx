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

  const toggleParticipants = () => {
    setVisible(!visible);
  };

  const toggleCheck = (event: any) => {
    const { value } = event.target;
    const newParticipants = participants.map((participant) => {
      return {
        name: participant.name,
        isChecked:
          participant.name === value
            ? !participant.isChecked
            : participant.isChecked,
      };
    });

    updateParticipants(newParticipants);
  };

  return (
    <>
      <div className="participants input-text">
        <div className="participants__title" onClick={toggleParticipants}>
          <div>Qui a faim ?</div>
        </div> 
        <div
          className={`participants__name ${visible ? "show-participants" : ""}`}
        >
          {participants.map((participant, index) => (
            <div key={index} className="participant">
              <input
                className="participant__checkbox"
                type="checkbox"
                name="dropdown-group"
                value={participant.name}
                checked={participant.isChecked}
                onChange={toggleCheck}
              />
              {participant.name}
            </div>
          ))}
          <div className="close-select" onClick={toggleParticipants}>
            OK
          </div>
        </div>
      </div>
    </>
  );
};
