// Lista de vuelos predefinidos (puedes modificar esta lista con los vuelos que desees)
const flights = [
    { flightNumber: 'AV123', origin: 'Bogotá', destination: 'Medellín', date: '2024-10-16', status: 'A Tiempo' },
    { flightNumber: 'LA456', origin: 'Bogotá', destination: 'Miami', date: '2024-10-17', status: 'Retrasado' },
    { flightNumber: 'UX789', origin: 'Madrid', destination: 'Bogotá', date: '2024-10-18', status: 'Cancelado' },
    { flightNumber: 'AA101', origin: 'Nueva York', destination: 'Bogotá', date: '2024-10-18', status: 'A Tiempo' }
];

// Cargar los vuelos automáticamente al cargar la página
window.onload = function () {
    displayFlights(flights);  // Muestra todos los vuelos al cargar la página
};

// Función que muestra los vuelos en la tabla
function displayFlights(flightData) {
    const resultsTable = document.getElementById('resultsTable');
    resultsTable.innerHTML = ''; // Limpiar la tabla

    if (flightData.length === 0) {
        resultsTable.innerHTML = '<tr><td colspan="5" class="text-center">No se encontraron resultados</td></tr>';
    } else {
        flightData.forEach(flight => {
            resultsTable.innerHTML += `
                <tr>
                    <td>${flight.flightNumber}</td>
                    <td>${flight.origin}</td>
                    <td>${flight.destination}</td>
                    <td>${flight.date}</td>
                    <td>${flight.status}</td>
                </tr>
            `;
        });
    }
}

// Filtrar vuelos al hacer clic en el botón de búsqueda
document.getElementById('searchBtn').addEventListener('click', function () {
    const origin = document.getElementById('origin').value.trim().toLowerCase();
    const destination = document.getElementById('destination').value.trim().toLowerCase();
    const flightDate = document.getElementById('flightDate').value;
    const status = document.getElementById('status').value;

    // Filtrar los vuelos según los criterios de búsqueda
    const filteredFlights = flights.filter(flight => {
        // Comprobamos si el valor está presente en cada filtro y si coincide con el vuelo
        const matchesOrigin = !origin || flight.origin.toLowerCase().includes(origin);
        const matchesDestination = !destination || flight.destination.toLowerCase().includes(destination);
        const matchesDate = !flightDate || flight.date === flightDate;
        const matchesStatus = !status || flight.status.toLowerCase() === status.toLowerCase();

        // Devolver solo los vuelos que cumplan con todos los criterios
        return matchesOrigin && matchesDestination && matchesDate && matchesStatus;
    });

    // Mostrar los vuelos filtrados
    displayFlights(filteredFlights);
});
