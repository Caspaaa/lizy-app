import * as React from "react";

interface Props {}

export const SearchParticipants: React.FunctionComponent<Props> = () => {
  const [visible, setVisible] = React.useState(false);
  const toggleParticipants = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="participants input-text">
        <div className="participants__title" onClick={toggleParticipants}>
          Qui a faim ?
        </div>
        <div
          className={`participants__name ${visible ? "show-participants" : ""}`}
        >
          <span className="closing-cross">x</span>
          <div className="participant">
            <input
              className="participant__checkbox"
              type="checkbox"
              name="dropdown-group"
              value="Gilles"
              checked
            />
            Gilles
          </div>
          <div className="participant">
            <input
              className="participant__checkbox"
              type="checkbox"
              name="dropdown-group"
              value="Vince"
              checked
            />
            Vince
          </div>
          <div className="participant">
            <input
              className="participant__checkbox"
              type="checkbox"
              name="dropdown-group"
              value="Sam"
              checked
            />
            Sam
          </div>
          <div className="participant">
            <input
              className="participant__checkbox"
              type="checkbox"
              name="dropdown-group"
              value="Klaas"
              checked
            />
            Klaas
          </div>
          <div className="participant">
            <input
              className="participant__checkbox"
              type="checkbox"
              name="dropdown-group"
              value="Gilles"
              checked
            />
            Gaelle
          </div>
        </div>
      </div>
    </>
  );
};
