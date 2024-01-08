import { useCurrentLocation } from "./useCurrentLocation";

export function App(){
    const {location, getLocation, error, loading} = useCurrentLocation();
    return (
        <div>
            <button onClick={getLocation}>Get current location</button>
            {error && <p>Error: {error}</p>}
            {loading && <h1>Loading...</h1> }
            {location && <p>your location: {location.latitude}, {location.longitude}</p> }
        </div>
    );
}