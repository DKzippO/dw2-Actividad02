$(document).ready(function() {
    // Array para almacenar los datos de los estudiantes
    var estudiantes = [];

    // Función para manejar el envío del formulario
    $('#registroEstudiantesForm').submit(function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

        // Obtener los valores del formulario
        var nombre = $('#nombre').val();
        var correo = $('#correo').val();
        var servicio = $('#servicio').val();

        // Validar que los campos no estén vacíos
        if (nombre && correo && servicio) {
            // Crear un objeto para almacenar los datos del estudiante
            var estudiante = {
                nombre: nombre,
                correo: correo,
                servicio: servicio
            };

            // Agregar el estudiante al array
            estudiantes.push(estudiante);

            // Limpiar los campos del formulario
            $('#registroEstudiantesForm')[0].reset();

            // Mostrar los estudiantes en una tabla
            mostrarEstudiantes();
        } else {
            alert('Por favor, complete todos los campos del formulario.');
        }
    });

    // Función para mostrar los estudiantes en una tabla
    function mostrarEstudiantes() {
        // Limpiar la tabla antes de agregar nuevos datos
        $('#tablaEstudiantes').empty();

        // Crear la cabecera de la tabla
        var tablaCabecera = $('<tr>').append(
            $('<th>').text('Nombre completo'),
            $('<th>').text('Email'),
            $('<th>').text('Servicio')
        );

        // Agregar la cabecera a la tabla
        $('#tablaEstudiantes').append(tablaCabecera);

        // Recorrer el array de estudiantes y agregar cada estudiante a la tabla
        estudiantes.forEach(function(estudiante) {
            var tablaFila = $('<tr>').append(
                $('<td>').text(estudiante.nombre),
                $('<td>').text(estudiante.correo),
                $('<td>').text(estudiante.servicio)
            );

            // Agregar la fila a la tabla
            $('#tablaEstudiantes').append(tablaFila);
        });
        console.log(estudiantes);
    }
});
