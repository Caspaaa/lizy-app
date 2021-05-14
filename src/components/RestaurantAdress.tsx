import * as React from "react";

interface Props {
  address: string[];
  distance: number;
}

export const RestaurantAddress: React.FunctionComponent<Props> = ({
  address,
  distance,
}) => {
  return (
    <div>
      {address.map((subAddress, index) => {
        return (
          <p key={index}>
            {subAddress}
            {index !== 0 ? (
              <span className="font-weight--thin">
                {" "}
                ({distance.toFixed()}m)
              </span>
            ) : (
              ""
            )}
          </p>
        );
      })}
    </div>
  );
};
