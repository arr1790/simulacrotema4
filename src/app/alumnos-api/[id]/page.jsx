import  connection  from "@/lib/mysql";






async function PaginaAlumno({ params }) {
    const { id } = params; // Obtenemos el ID del estudiante desde los parámetros.

    // Realizamos la solicitud para obtener los datos del estudiante.
    const response = await fetch(`http://localhost:4000/alumnos/`+id);
  

    const alumno = await response.json(); // Suponemos que `response.json()` devuelve un objeto con los datos del alumno.

    return (
        <div>
            <p>Nombre: {alumno.nombre}</p>
            <p>Localidad: {alumno.localidad}</p>
            <p>
                Fecha de Nacimiento:{" "}
                {new Date(alumno.fecha_nacimiento).toLocaleDateString()}
            </p>
        </div>
    );
}

export default PaginaAlumno;
