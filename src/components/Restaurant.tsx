import * as React from "react";
import { RestaurantAddress } from "./RestaurantAdress";
import { RestaurantPhone } from "./RestaurantPhone";
import { RestaurantExtras } from "./RestaurantExtras";
import restaurantIcon from "../assets/images/restaurant-icon.png";
import cuisineIcon from "../assets/images/cuisine-icon.png";

interface Props {
  place: Restaurant;
}

export const Restaurant: React.FunctionComponent<Props> = ({ place }) => {
  return (
    <div className="restaurant shadow">
      <div className="restaurant__head">
        <div className="restaurant-name">
          <div className="restaurant-name__icon">
            <img
              className="icon icon--restaurant"
              src={restaurantIcon}
              alt={place.name}
            />
          </div>
          <div className="restaurant-name__text">{place.name}</div>
        </div>
        <div className="restaurant-img-wrapper">
          <img className="restaurant-img" src={place.image} alt={place.name} />
        </div>
      </div>

      <div className="restaurant__desc">
        <div className="restaurant-desc-item restaurant-cuisine">
          <div className="restaurant-desc-item__icon">
            <img
              src={cuisineIcon}
              alt="cuisine-icon"
              className="icon icon--cuisine"
            />
          </div>
          <div className="restaurant-desc-item__text">{place.cuisine}</div>
        </div>
        {place.phone ? <RestaurantPhone phone={place.phone} /> : ""}
        <RestaurantAddress address={place.address} distance={place.distance} />
      </div>
      <RestaurantExtras
        price={place.price}
        rating={place.rating}
        rating_count={place.rating_count}
      />
    </div>
  );
};
