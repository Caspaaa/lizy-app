import * as React from "react";

interface Props {}

export const Search: React.FunctionComponent = (props: any) => {
  const [search, setSearch] = React.useState({
    location: "50.826587, 4.37309",
    radius: 200,
    priceRange: {
      min: 0,
      max: 3,
    },
  });

  const [results, setResults] = React.useState([
    {
      name: "",
      address: "",
      rating: 0,
    },
  ]);

  const handleInputChange = (event: any) => {
    const { value, name } = event.target;

    setSearch({
      ...search,
      [name]: value,
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
      const googlePlacesResults: GooglePlacesItem[] = responseJSON.results;

      const restaurants: Restaurant[] = googlePlacesResults.map(
        (place: GooglePlacesItem) => {
          return {
            name: place.name,
            address: place.vicinity,
            rating: place.rating,
          };
        }
      );

      setResults(restaurants);
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
            <label>Min price : </label>
            <input
              type="text"
              name="min price"
              value={search.priceRange.min}
              onChange={handleInputChange}
              required
            />
            <label>Max price : </label>
            <input
              type="text"
              name="max price"
              value={search.priceRange.max}
              onChange={handleInputChange}
              required
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
      <div className="results">
        {results.map((place: Restaurant) => {
          return (
            <div className="restaurant">
              <p>{place.name}</p>
              <p>{place.address}</p>
              <p>{place.rating}/5</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
