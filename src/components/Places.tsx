import * as React from "react";
import { Restaurants } from "./Restaurants";
import { Filter } from "./Filter";

export const Places: React.FunctionComponent = () => {
  const [search, setSearch] = React.useState({
    location: "50.826587,4.37309",
    radius: 200,
    priceRange: 1,
  });

  const [restaurants, setRestaurants] = React.useState<Restaurant[]>([]);

  const [isBoxed, setIsBoxed] = React.useState(true);

  const handleInputChange = (event: any) => {
    const { value, name } = event.target;

    setSearch({
      ...search,
      [name]: value,
    });
  };

  const updatePriceRange = (newPriceRange: number) => {
    setSearch({
      ...search,
      priceRange: newPriceRange,
    });
  };

  const updateCoords = (coords: string) => {
    setSearch({
      ...search,
      location: coords,
    });
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/search`, {
        // const response = await fetch(`http://localhost:8000/api/search`, {
        method: "POST",
        body: JSON.stringify(search),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJSON = await response.json();
      console.log("responseJSON", responseJSON);
      setRestaurants(responseJSON);
      if (isBoxed) setIsBoxed(!isBoxed);
    } catch (error) {
      console.error(error);
      alert("Error searching please try again");
    }
  };

  return (
    <div className={isBoxed ? "boxed-form" : ""}>
      <Filter
        search={search}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
        updatePriceRange={updatePriceRange}
        updateCoords={updateCoords}
        isBoxed={isBoxed}
      />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
