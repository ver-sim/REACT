import { useState } from "react"

export const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    setLoading(true);

    if(!navigator.geolocation){
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords;
      setLocation({latitude, longitude});
      setLoading(false);
    }, (error) => {setError(error.message); setLoading(false)});
    
  }

  return {location, getLocation, error, loading}
}
