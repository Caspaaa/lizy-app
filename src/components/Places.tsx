import * as React from "react";
import { Filter } from "./Filter";
import { Restaurants } from "./Restaurants";

interface Filters {
  location: string;
  radius: number;
  priceRange: number;
  participants: Participant[];
}

export const Places: React.FunctionComponent = () => {
  const [search, setSearch] = React.useState<Filters>({
    location: "50.826587,4.37309",
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
        updateParticipants={updateParticipants}
        isBoxed={isBoxed}
      />
      <Restaurants restaurants={restaurants} />
    </div>
  );
};
