import * as React from "react";
import { PriceRange } from "./PriceRange";
import { Restaurants } from "./Restaurants";

export const Search: React.FunctionComponent = () => {
  const [search, setSearch] = React.useState({
    location: "50.826587,4.37309",
    radius: 200,
    priceRange: [1],
  });

  const [restaurants, setRestaurants] = React.useState<Restaurant[]>([]);

  const handleInputChange = (event: any) => {
    const { value, name } = event.target;

    setSearch({
      ...search,
      [name]: value,
    });
  };

  const updatePriceRange = (newPriceRange: number[]) => {
    setSearch({
      ...search,
      priceRange: newPriceRange,
    });
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/search", {
        method: "POST",
        body: JSON.stringify(search),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJSON = await response.json();
      console.log("responseJSON", responseJSON);
      setRestaurants(responseJSON);
    } catch (error) {
      console.error(error);
      alert("Error searching please try again");
    }
  };

  return (
    <div>
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
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
