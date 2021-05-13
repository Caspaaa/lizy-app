import * as React from "react";

interface Props {
  place: Restaurant;
}

export const Restaurant: React.FunctionComponent<Props> = ({ place }) => {
  console.log(place);
  return (
    <div className="restaurant shadow">
      <div className="restaurant__img">
        <img src={place.image} />
      </div>
      <p>{place.name}</p>
      <p>{place.address}</p>
      <p>{place.cuisine}</p>
      <p>{place.price}</p>
      <p>{place.rating}/5</p>
    </div>
  );
};
