import  connection  from "@/lib/mysql";






async function PaginaAlumno({params,searchParams}) {
    const {id} = await params;
   const [[alumno]] = await connection.query("SELECT * FROM alumnos WHERE id = ?",[id]);
 

    return ( 
        <div>
            <p>{alumno.nombre}</p>
            <p>{alumno.localidad}</p>
            <p>{alumno.fecha_nacimiento.toLocaleString()}</p>
        </div>

     );
}

export default PaginaAlumno ;