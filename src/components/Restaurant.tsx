import * as React from "react";
import { RestaurantAddress } from "./RestaurantAdress";
import { RestaurantExtras } from "./RestaurantExtras";

interface Props {
  place: Restaurant;
}

export const Restaurant: React.FunctionComponent<Props> = ({ place }) => {
  return (
    <div className="restaurant shadow">
      <div className="restaurant__img">
        <img src={place.image} alt={place.name} />
      </div>
      <p>{place.name}</p>
      <p>{place.cuisine}</p>
      <RestaurantAddress address={place.address} distance={place.distance} />
      <RestaurantExtras
        price={place.price}
        rating={place.rating}
        rating_count={place.rating_count}
      />
    </div>
  );
};
