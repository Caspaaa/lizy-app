import * as React from "react";
import addressIcon from "../assets/images/location-icon.png";

interface Props {
  address: string[];
  name: string;
  distance: number;
}

export const RestaurantAddress: React.FunctionComponent<Props> = ({
  address,
  distance,
  name,
}) => {
  return (
    <div className="restaurant-desc-item restaurant-address">
      <div className="restaurant-desc-item__icon">
        <img
          src={addressIcon}
          alt="retaurant-address"
          className="icon icon--address"
        />
      </div>
      <a
        href={`https://maps.google.com?q=${name}`}
        target="_blank"
        className="restaurant-desc-item__text"
      >
        {address.map((subAddress, index) => {
          return (
            <div key={index}>
              {subAddress}
              {index !== 0 ? (
                <span className="font-weight--thin">
                  {" "}
                  ({distance.toFixed()}m)
                </span>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </a>
    </div>
  );
};
