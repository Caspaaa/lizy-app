import * as React from "react";
import parse from "html-react-parser";
import starFull from "../../assets/images/star-full-icon.png";
import starHalf from "../../assets/images/star-half-icon.png";
import starEmpty from "../../assets/images/star-empty-icon.png";

const formatRating = (rating: number) => {
  const starsFull = `<img src="${starFull}" alt="star-icon-full" class="rating__star" />`.repeat(
    Math.floor(rating)
  );
  const starsHalf = `<img src="${starHalf}" alt="star-icon-half" class="rating__star" />`.repeat(
    (rating % 1) + 0.5
  );
  const starsEmpty = `<img src="${starEmpty}" alt="star-icon-empty" class="rating__star" />`.repeat(
    Math.floor(5 - rating)
  );
  return [starsFull, starsHalf, starsEmpty].join("");
};

interface Props {
  price: number;
  rating: number;
  rating_count: number;
}

export const RestaurantExtras: React.FunctionComponent<Props> = ({
  price,
  rating,
  rating_count,
}) => {
  return (
    <div className="restaurant__extras">
      <div className="restaurant-extras-rating">
        <div>{parse(formatRating(rating))}</div>
        <div className="restaurant-extras-rating__count font-weight--thin">
          ({rating_count})
        </div>
      </div>
      <div className="restaurant-extras-price">{price}</div>
    </div>
  );
};
