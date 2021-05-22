import * as React from "react";
import FilterAddress from "./FilterAddress";
import { Header } from "../Header";
import { PriceRange } from "../restaurants/PriceRange";
import { FilterParticipants } from "./FilterParticipants";

interface Props {
  search: SearchInterface;
  fetchRestaurants: Function;
  updateCoords: Function;
  updateParticipants: Function;
  updateRadius: React.ChangeEventHandler;
  updatePriceRange: Function;
  isBoxed: boolean;
}

export const Filter: React.FunctionComponent<Props> = ({
  search,
  fetchRestaurants,
  updateCoords,
  updateParticipants,
  updateRadius,
  updatePriceRange,
  isBoxed,
}) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (search.location) {
      fetchRestaurants();
      setHasNoAddress(false);
      return;
    }

    setHasNoAddress(true);
  };

  const [hasNoAddress, setHasNoAddress] = React.useState(false);

  return (
    <div>
      <Header />
      <form className="form-search" onSubmit={handleSubmit}>
        <div
          className={`form-search__inputs ${hasNoAddress ? "unfilled" : ""}`}
        >
          <FilterAddress updateCoords={updateCoords} />
          <select
            data-testid="select-radius"
            className="input-text"
            placeholder="Rayon"
            onChange={updateRadius}
            name="radius"
          >
            <option data-testid="500" value="500">
              500 m
            </option>
            <option data-testid="1000" value="1000">
              1 km
            </option>
            <option data-testid="5000" value="5000">
              5 km
            </option>
            <option data-testid="10000" value="10000">
              10 km
            </option>
          </select>
          <FilterParticipants
            participants={search.participants}
            updateParticipants={updateParticipants}
          />

          <PriceRange
            priceRange={search.priceRange}
            updatePriceRange={updatePriceRange}
          />
        </div>
        <div className={`form-search__submit ${isBoxed ? "" : "hidden"}`}>
          <input
            className="form-input--submit"
            type="submit"
            value="Rechercher"
          />
        </div>
      </form>
    </div>
  );
};
