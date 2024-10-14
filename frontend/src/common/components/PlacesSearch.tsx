import React, { useCallback, useEffect, useState } from "react";
import { Loader } from "@mantine/core"; // Make sure to import Loader from Mantine
import { loadGoogleMapsScript } from "../api/googleAPILoader";
import "../styles/PlacesSearchStyles.scss";
import TextAtom from "./TextAtom";
import { FONT_WEIGHTS, TEXT_SIZES } from "..";
import { IconX } from "@tabler/icons-react";

interface PlacesSearchProps {
  title: string;
  selectedPlace: (place: string) => void;
}

const PlacesSearch: React.FC<PlacesSearchProps> = ({
  title,
  selectedPlace,
}) => {
  const [places, setPlaces] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false); // State for loading

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    if (apiKey) {
      loadGoogleMapsScript(apiKey).catch((error) => {
        console.error("Error loading Google Maps API:", error);
      });
    } else {
      console.error("Google API key not found");
    }
  }, []);

  const fetchPlacePredictions = useCallback((input: string) => {
    if (input && window.google) {
      const autocompleteService =
        new window.google.maps.places.AutocompleteService();
      setLoading(true); // Set loading to true when fetching
      autocompleteService.getPlacePredictions(
        { input },
        (predictions, status) => {
          setLoading(false); // Reset loading state
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            predictions
          ) {
            const places = predictions.map(
              (prediction) => prediction.description
            );
            setPlaces(places);
          } else {
            setPlaces([]);
          }
        }
      );
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    if (value === "") {
      setPlaces([]);
    }
  };

  const clearInput = () => {
    setQuery(""); // Clear the input
    setPlaces([]); // Optionally clear the places as well
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      if (query) fetchPlacePredictions(query);
    }, 500);

    return () => clearTimeout(getData);
  }, [query, fetchPlacePredictions]);

  return (
    <div className="placessearch__container">
      <TextAtom mb={2} size={TEXT_SIZES.sm} weight={FONT_WEIGHTS.semibold}>
        {title}
      </TextAtom>

      <div style={{ position: "relative" }}>
        <input
          //   type="search"
          placeholder="Search for places"
          onChange={handleInputChange}
          value={query}
          className="placessearch__input"
        />
        {loading && <Loader size={20} className="loading__spinner" />}
        {/* Conditional rendering for clear button */}
        {!loading && query && (
          <IconX size={14} onClick={clearInput} className="clear-button" />
        )}
      </div>
      {places.length > 0 && (
        <ul className="optionslist__container">
          {places.map((place) => (
            <li
              key={place}
              onClick={() => {
                setQuery(place);
                selectedPlace(place);
              }}
            >
              {place}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlacesSearch;
