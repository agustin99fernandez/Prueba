let listapc =[]

// Función para llenar la tabla con los datos
function llenarTabla() {
  const tabla = document.getElementById('problemasTable').getElementsByTagName('tbody')[0];

  // Limpiar la tabla antes de agregar nuevos datos
  tabla.innerHTML = '';

  // Iterar sobre los datos y agregar filas a la tabla
  datosProblemas.forEach((problema) => {
    const fila = tabla.insertRow();
    const celdaNombrePC = fila.insertCell(0);
    const celdaIncidentes = fila.insertCell(1);
    const celdaResuelto = fila.insertCell(2);

    celdaNombrePC.textContent = problema.nombrePC;
    celdaIncidentes.textContent = problema.incidentes;
    celdaResuelto.textContent = problema.resuelto ? 'Sí' : 'No';
  });
}

// Llamar a la función para llenar la tabla al cargar la página
llenarTabla();