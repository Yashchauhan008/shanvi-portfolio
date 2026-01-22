// Initialize Leaflet map
function initMap() {
    // Check if map element exists
    var mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Map element not found');
        return;
    }

    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
        console.error('Leaflet library is not loaded');
        return;
    }

    // Coordinates: 22.8139656, 70.8690754
    var lat = 22.8139656;
    var lng = 70.8690754;

    // Initialize map
    var map = L.map('map').setView([lat, lng], 15);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Add marker
    var marker = L.marker([lat, lng]).addTo(map);
    
    // Add popup to marker
    marker.bindPopup('<b>Shanvi Enterprise</b><br>309/ 3rd Floor, Wing-A, Ishan Ceramic Zone,<br>OPP. Shakti Chembar-2 Lalpar, Morbi-2, Gujarat - 363642').openPopup();
}

// Initialize map when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
} else {
    initMap();
}
