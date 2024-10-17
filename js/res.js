// Obtener los elementos del formulario y la tabla
const addEmployeeForm = document.getElementById('addEmployeeForm');
const employeeTableBody = document.getElementById('employeeTableBody');

// Array para almacenar los empleados
let empleados = [];

// Escuchar el evento de envío del formulario
addEmployeeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const rol = document.getElementById('rol').value;
    const turno = document.getElementById('turno').value;

    // Crear un nuevo empleado
    const nuevoEmpleado = {
        nombre,
        apellido,
        email,
        rol,
        turno
    };

    // Agregar el empleado al array
    empleados.push(nuevoEmpleado);

    // Actualizar la tabla con los nuevos empleados
    actualizarTabla();

    // Resetear el formulario
    addEmployeeForm.reset();
});

// Función para actualizar la tabla con los empleados
function actualizarTabla() {
    // Limpiar el contenido de la tabla
    employeeTableBody.innerHTML = '';

    // Recorrer el array de empleados y generar filas en la tabla
    empleados.forEach((empleado, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${empleado.nombre}</td>
            <td>${empleado.apellido}</td>
            <td>${empleado.email}</td>
            <td>${empleado.rol}</td>
            <td>${empleado.turno}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminarEmpleado(${index})">Eliminar</button>
            </td>
        `;
        employeeTableBody.appendChild(row);
    });
}

// Función para eliminar un empleado de la lista
function eliminarEmpleado(index) {
    empleados.splice(index, 1); // Eliminar el empleado del array
    actualizarTabla(); // Actualizar la tabla
}
