import * as React from "react";

export const FilterParticipants: React.FunctionComponent = () => {
  const [participants, setParticipants] = React.useState<Participant[]>([
    { name: "Gilles", isChecked: true },
    { name: "Vince", isChecked: true },
    { name: "Sam", isChecked: true },
    { name: "Klaas", isChecked: true },
    { name: "Gaelle", isChecked: true },
  ]);

  const [visible, setVisible] = React.useState(false);
  const toggleParticipants = () => {
    setVisible(!visible);
  };

  const toggleCheck = (event: any) => {
    const { value } = event.target;
    const newParticipants = [...participants];
    const brandNewParticipants = newParticipants.map((participant) => {
      return {
        name: participant.name,
        isChecked:
          participant.name === value
            ? !participant.isChecked
            : participant.isChecked,
      };
    });
    setParticipants(brandNewParticipants);
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
          <span className="closing-cross" onClick={toggleParticipants}>
            x
          </span>
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
        </div>
      </div>
    </>
  );
};
