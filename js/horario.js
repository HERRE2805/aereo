document.addEventListener("DOMContentLoaded", function() {
  // Aquí va el código que actualiza la hora y fecha
  function updateTime() {
      const now = new Date();

      // Obtener horas, minutos y AM/PM
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';

      // Convertir a formato 12 horas
      hours = hours % 12;
      hours = hours ? hours : 12; // El 0 se convierte en 12
      minutes = minutes < 10 ? '0' + minutes : minutes;

      // Formatear la hora en una cadena
      const timeString = `${hours}:${minutes} ${ampm}`;

      // Obtener la fecha actual
      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const dayName = days[now.getDay()];
      const day = now.getDate();
      const monthName = months[now.getMonth()];
      
      const dateString = `${dayName} ${day} de ${monthName}`;

      // Actualizar la hora y la fecha en el HTML
      document.getElementById('current-time').textContent = timeString;
      document.getElementById('current-date').textContent = dateString;
  }

  // Ejecutar la función cuando la página se carga
  updateTime();

  // Actualizar la hora cada minuto (60000 ms)
  setInterval(updateTime, 60000);
});
