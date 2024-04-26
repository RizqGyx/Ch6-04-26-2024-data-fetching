import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();
  const [isFetching, setIsFethcing] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsFethcing(true);
      try {
        const response = await fetch("http://localhost:3000");
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        setAvailablePlaces(data.places);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch data, please try again later !",
        });
      }
      setIsFethcing(false);
    }
    fetchData();
  }, []);

  if (error) {
    return <Error title="An Error Occured!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Data Is Fetching..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
