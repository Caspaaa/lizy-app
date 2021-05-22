import * as React from "react";
import { Filter } from "./filters/Filter";
import { Restaurants } from "./restaurants/Restaurants";
import { fetchRestaurants } from "../services/restaurantsService";

interface Filters {
  location: string | null;
  radius: number;
  priceRange: number;
  participants: Participant[];
}

export const Places: React.FunctionComponent = () => {
  const [search, setSearch] = React.useState<Filters>({
    location: null,
    radius: 500,
    priceRange: 1,
    participants: [
      { name: "Gilles", isChecked: true },
      { name: "Vince", isChecked: true },
      { name: "Sam", isChecked: true },
      { name: "Klaas", isChecked: true },
      { name: "Gaelle", isChecked: true },
    ],
  });

  const [restaurants, setRestaurants] = React.useState<Restaurant[]>([]);

  const [isBoxed, setIsBoxed] = React.useState(true);

  React.useEffect(() => {
    !isBoxed && loadRestaurants();
    // eslint-disable-next-line
  }, [search]);

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

  const updateParticipants = (participants: Participant[]) => {
    setSearch({
      ...search,
      participants: participants,
    });
  };

  const loadRestaurants = async () => {
    try {
      const restaurants = await fetchRestaurants(search);
 
      setRestaurants(restaurants);
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
        fetchRestaurants={loadRestaurants}
        updateCoords={updateCoords}
        updateRadius={handleInputChange}
        updateParticipants={updateParticipants}
        updatePriceRange={updatePriceRange}
        isBoxed={isBoxed}
      />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
