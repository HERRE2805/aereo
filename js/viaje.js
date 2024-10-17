// Obtener los elementos del DOM
const incidentForm = document.getElementById('incidentForm');
const incidentsContainer = document.getElementById('incidents');

// Escuchar el evento de envío del formulario
incidentForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Obtener los valores del formulario
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const type = document.getElementById('type').value;
    const priority = document.getElementById('priority').value;

    // Crear una nueva tarjeta de incidencia
    const newIncident = document.createElement('div');
    newIncident.classList.add('incident-card', 'p-3', 'mt-3', 'shadow-sm', 'rounded', 'border-start', 'border-3');

    // Asignar color de borde basado en la prioridad
    if (priority === 'baja') {
        newIncident.classList.add('border-success');
    } else if (priority === 'media') {
        newIncident.classList.add('border-warning');
    } else if (priority === 'alta') {
        newIncident.classList.add('border-danger');
    } else if (priority === 'critica') {
        newIncident.classList.add('border-dark', 'bg-danger', 'text-white');
    }

    // Insertar el contenido dentro de la nueva tarjeta de incidencia
    newIncident.innerHTML = `
        <h5>${title}</h5>
        <small>Tipo: ${type} | Prioridad: ${priority}</small>
        <p>${description}</p>
    `;

    // Añadir la nueva tarjeta al contenedor de incidencias
    incidentsContainer.appendChild(newIncident);

    // Resetear el formulario
    incidentForm.reset();
});
