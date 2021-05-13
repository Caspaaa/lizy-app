import * as React from "react";
import { PriceRange } from "./PriceRange";

export const Search: React.FunctionComponent<Props> = ({
  search,
  handleInputChange,
  onSubmit,
  updatePriceRange,
}) => {
  return (
    <div>
      <div>
        <h1>Search for restaurants</h1>
        <form onSubmit={onSubmit}>
          <label>Location : </label>
          <input
            type="text"
            name="location"
            value={search.location}
            onChange={handleInputChange}
            required
          />
          <label>Radius : </label>
          <input
            type="text"
            name="radius"
            value={search.radius}
            onChange={handleInputChange}
            required
          />

          <PriceRange
            priceRange={search.priceRange}
            updatePriceRange={updatePriceRange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
};
