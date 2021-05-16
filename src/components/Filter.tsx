import * as React from "react";
import FilterAddress from "./FilterAddress";
import { Header } from "./Header";
import { PriceRange } from "./PriceRange";
import { FilterParticipants } from "./FilterParticipants";

interface Props {
  search: SearchInterface;
  handleInputChange: React.ChangeEventHandler;
  onSubmit: React.FormEventHandler;
  updatePriceRange: Function;
  updateCoords: Function;
  updateParticipants: Function;
  isBoxed: boolean;
}

export const Filter: React.FunctionComponent<Props> = ({
  search,
  handleInputChange,
  onSubmit,
  updatePriceRange,
  updateCoords,
  updateParticipants,
  isBoxed,
}) => {
  return (
    <div>
      <Header />
      <form className="form-search" onSubmit={onSubmit}>
        <div className="form-search__inputs">
          <FilterAddress updateCoords={updateCoords} />
          <select
            className="input-text"
            placeholder="Rayon"
            onChange={handleInputChange}
            name="radius"
          >
            <option value="500">500 m</option>
            <option value="1000">1 km</option>
            <option value="5000">5 km</option>
            <option value="10000">10 km</option>
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
