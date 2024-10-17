document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const fechaEntrada = document.getElementById('fechaEntrada').value;
    const horaEntrada = document.getElementById('horaEntrada').value;
    const fechaSalida = document.getElementById('fechaSalida').value;
    const horaSalida = document.getElementById('horaSalida').value;

    // Verificación básica de fechas y horas
    const fechaHoraEntrada = new Date(fechaEntrada + 'T' + horaEntrada);
    const fechaHoraSalida = new Date(fechaSalida + 'T' + horaSalida);

    if (fechaHoraEntrada >= fechaHoraSalida) {
        document.getElementById('resultado').innerHTML = `<div class="alert alert-danger">La fecha/hora de salida debe ser mayor que la de entrada.</div>`;
        return;
    }

    // Simular la verificación de disponibilidad
    const espaciosDisponibles = Math.random() > 0.5; // Simulación de disponibilidad

    if (espaciosDisponibles) {
        document.getElementById('resultado').innerHTML = `<div class="alert alert-success">Reserva confirmada del ${fechaEntrada} ${horaEntrada} al ${fechaSalida} ${horaSalida}.</div>`;
    } else {
        document.getElementById('resultado').innerHTML = `<div class="alert alert-warning">No hay espacios disponibles en el horario seleccionado.</div>`;
    }
});