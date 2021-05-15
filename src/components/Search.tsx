import * as React from "react";
import { Header } from "./Header";
import { PriceRange } from "./PriceRange";
import { SearchParticipants } from "./SearchParticipants";

export const Search: React.FunctionComponent<Props> = ({
  search,
  handleInputChange,
  onSubmit,
  updatePriceRange,
}) => {
  return (
    <div>
      <Header />
      <form className="form-search" onSubmit={onSubmit}>
        <div className="form-search__inputs">
          <input
            className="input-text"
            type="text"
            name="location"
            placeholder="Adresse"
            value={search.location}
            onChange={handleInputChange}
            required
          />
          <input
            className="input-text"
            type="text"
            name="radius"
            placeholder="Rayon"
            value={search.radius}
            onChange={handleInputChange}
            required
          />
          <SearchParticipants />

          <PriceRange
            priceRange={search.priceRange}
            updatePriceRange={updatePriceRange}
          />
        </div>
        <div className="form-search__submit">
          <input className="form-input--submit" type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
};
