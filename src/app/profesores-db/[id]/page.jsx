import  connection  from "@/lib/mysql";






async function PaginaProfesor({params,searchParams}) {
    const {id} = await params;
   const [[profesor]] = await connection.query("SELECT * FROM profesores WHERE id = ?",[id]);
 

    return ( 
        <div>
            <p>{profesor.nombre}</p>
            <p>{profesor.especialidad}</p>
            <p>{profesor.estado_civil}</p>
        </div>

     );
}

export default PaginaProfesor ;