import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";

interface Props {
  updateCoords: Function;
}

const SearchAddress: React.FunctionComponent<Props> = ({ updateCoords }) => {
  // const [value, setValue] = React.useState(null);

  const getPlaceId = (place: any) => {
    // setValue(place);
    console.log("place.place_id", place.value.place_id);
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
          onChange: getPlaceId,
        }}
      />
    </div>
  );
};

export default SearchAddress;
