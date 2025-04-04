function findNearbyHospitals() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const url = `https://www.google.com/maps/search/hospitals/@${latitude},${longitude},13z`;
                window.open(url, '_blank');
            },
            function(error) {
                // If user denies location access or there's an error
                alert('Unable to get your location. Please enable location services or manually search for hospitals.');
                // Fallback to default location (AIIMS New Delhi)
                const url = 'https://www.google.com/maps/search/hospitals/@28.5675812,77.2072729,13z';
                window.open(url, '_blank');
            }
        );
    } else {
        // If geolocation is not supported
        alert('Geolocation is not supported by your browser. Please manually search for hospitals.');
        // Fallback to default location
        const url = 'https://www.google.com/maps/search/hospitals/@28.5675812,77.2072729,13z';
        window.open(url, '_blank');
    }
} 