import * as React from "react";
import parse from "html-react-parser";
import { RestaurantAddress } from "./RestaurantAdress";
import starFull from "../assets/images/star-full-icon.png";
import starHalf from "../assets/images/star-half-icon.png";
import starEmpty from "../assets/images/star-empty-icon.png";

interface Props {
  place: Restaurant;
}

const formatRating = (rating: number) => {
  const starsFull =
    `<img src="${starFull}" alt="star-icon-full" class="rating__star" />`.repeat(
      Math.floor(rating)
    );
  const starsHalf =
    `<img src="${starHalf}" alt="star-icon-half" class="rating__star" />`.repeat(
      (rating % 1) + 0.5
    );
  const starsEmpty =
    `<img src="${starEmpty}" alt="star-icon-empty" class="rating__star" />`.repeat(
      Math.floor(5 - rating)
    );
  return [starsFull, starsHalf, starsEmpty].join("");
};

export const Restaurant: React.FunctionComponent<Props> = ({ place }) => {
  return (
    <div className="restaurant shadow">
      <div className="restaurant__img">
        <img src={place.image} alt={place.name} />
      </div>
      <p>{place.name}</p>
      <p>{place.cuisine}</p>
      <RestaurantAddress address={place.address} distance={place.distance} />
      <div className="restaurant__bottom-extras">
        <div className="restaurant__rating">
          <div>{parse(formatRating(place.rating))}</div>
          <div>({place.rating_count})</div>
        </div>
        <div>{place.price}</div>
      </div>
    </div>
  );
};
