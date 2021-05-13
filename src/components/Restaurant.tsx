import * as React from "react";

interface Props {
  place: Restaurant;
}

export const Restaurant: React.FunctionComponent<Props> = ({ place }) => {
  return (
    <div className="restaurant">
      <p>{place.name}</p>
      <p>{place.address}</p>
      <p>{place.cuisine}</p>
      <p>{place.price}</p>
      <p>{place.rating}</p>
    </div>
  );
};
