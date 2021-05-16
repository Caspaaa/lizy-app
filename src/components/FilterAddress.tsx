import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";

interface Props {
  updateCoords: Function;
}

const FilterAddress: React.FunctionComponent<Props> = ({ updateCoords }) => {
  const setPlaceCoords = (place: any) => {
    geocodeByPlaceId(place.value.place_id)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => updateCoords(`${lat},${lng}`))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyCMkBPD84IDhGeDvEyXY4OumcwHROvGJ58"
        autocompletionRequest={{
          componentRestrictions: {
            country: ["be"],
          },
        }}
        selectProps={{
          // placeholder: place.label,
          placeholder: "Où êtes-vous ?",
          onChange: setPlaceCoords,
        }}
      />
    </div>
  );
};

export default FilterAddress;
