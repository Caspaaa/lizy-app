import * as React from "react";
import { Restaurant } from "./Restaurant";

interface Props {
  restaurants: Restaurant[];
}

export const Restaurants: React.FunctionComponent<Props> = ({
  restaurants,
}) => {
  return (
    <div className="results">
      {restaurants.map((place: Restaurant) => {
        return <Restaurant key={place.id} place={place} />;
      })}
    </div>
  );
};
