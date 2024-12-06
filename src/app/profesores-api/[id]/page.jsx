import  connection  from "@/lib/mysql";






async function PaginaProfesor({params,searchParams}) {
    const {id} = await params;
    const response = await fetch('http://localhost:4000/profesores' )
     
    const data = await response.json()
 

    return ( 
        <div>
            <p>{profesor.nombre}</p>
            <p>{profesor.especialidad}</p>
            <p>{profesor.estado_civil}</p>
        </div>

     );
}

export default PaginaProfesor ;