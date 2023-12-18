import { useState, useEffect } from 'react';

export default function useGeoLocation() {
  const [location, setLocation] = useState({
    loaded: false,
    coords: { lat: "", lng: "" },
  });

  const onSuccess = (position) => {
    setLocation({
      loaded: true,
      coords: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    const getGeoLocation = async () => {
      try {
        if (!("geolocation" in navigator)) {
          throw new Error("Geolocation not supported");
        }

        const permission = await navigator.permissions.query({ name: 'geolocation' });

        if (permission.state === 'granted') {
          navigator.geolocation.getCurrentPosition(onSuccess, onError);
        } else {
          throw new Error("Geolocation permission denied");
        }
      } catch (error) {
        onError({
          code: 0,
          message: error.message,
        });
      }
    };

    getGeoLocation();
  }, []);

  console.log('Location:', location); // Добавим вывод в консоль

  return location;
}
