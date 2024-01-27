export const getCountryCodeFromCoordinates = async (latitude, longitude) => {
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'OK' && data.results.length > 0) {
      // Extract the country code from the response
      const addressComponents = data.results[0].address_components;
      const countryComponent = addressComponents.find(component =>
        component.types.includes('country'),
      );

      if (countryComponent) {
        // Return the country code
        return countryComponent.short_name;
      }
    }
  } catch (error) {
    console.error('Error fetching geocoding data:', error);
  }

  // Default to '+1' if unable to determine the country code
  return '+1';
};
