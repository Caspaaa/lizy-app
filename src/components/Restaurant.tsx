import * as React from "react";
import { RestaurantAddress } from "./RestaurantAdress";
import { RestaurantPhone } from "./RestaurantPhone";
import { RestaurantExtras } from "./RestaurantExtras";
import restaurantIcon from "../assets/images/restaurant-icon.png";
import cuisineIcon from "../assets/images/cuisine-icon.png";
import noImageRestaurant from "../assets/images/bg-no-img.png";

interface Props {
  place: any;
}

export const Restaurant: React.FunctionComponent<Props> = ({ place }) => {
  const truncate = (string: string, size: number) => {
    return string.length > size ? string.slice(0, size - 1) + "..." : string;
  };

  return (
    <div className="restaurant">
      <div className="restaurant__head">
        <div className="restaurant-name">
          <div className="restaurant-name__icon">
            <img
              className="icon icon--restaurant"
              src={restaurantIcon}
              alt={place.name}
            />
          </div>
          <div className="restaurant-name__text">
            {truncate(place.name, 20)}
          </div>
        </div>
        <div className="restaurant-img-wrapper">
          <img
            className="restaurant-img"
            src={place.image || noImageRestaurant}
            alt={place.name}
          />
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
          <div className="restaurant-desc-item__text">
            {place.cuisine.join(" - ")}
          </div>
        </div>
        {place.phone ? <RestaurantPhone phone={place.phone} /> : ""}
        <RestaurantAddress
          address={place.address}
          name={place.name}
          distance={place.distance}
        />
      </div>
      <RestaurantExtras
        price={place.price}
        rating={place.rating}
        rating_count={place.rating_count}
      />
    </div>
  );
};
