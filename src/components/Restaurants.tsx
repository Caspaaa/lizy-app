import * as React from "react";
import { Restaurant } from "./Restaurant";

interface Props {
  restaurants: Restaurant[];
}

interface Restaurant {
  image: string;
  id: string;
  name: string;
  address: string[];
  distance: number;
  cuisine: string[];
  phone: string;
  price: 1 | 2 | 3 | 4;
  rating: number;
  rating_count: number;
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
