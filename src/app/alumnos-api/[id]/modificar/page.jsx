import connection from "@/lib/mysql";
import { redirect } from "next/navigation";

async function modificarAlumno(formData) {
    'use server'
    const id = formData.get("id")
    const nombre = formData.get("nombre")
    const localidad = formData.get("localidad")
    const fecha_nacimiento = formData.get("fecha_nacimiento")
    await connection.query("UPDATE alumnos SET nombre = ?, localidad = ?, fecha_nacimiento = ? WHERE id = ?", [nombre, localidad, fecha_nacimiento, id])
    redirect(`/alumnos/${id}`)
}


async function PageModificar({params}) {
    const { id } = await params;
    const [rows] = await connection.query("SELECT * FROM alumnos WHERE id = ?", [id]);
    const alumno = rows[0];
    return (
    <div>
        <form action={modificarAlumno}>
            <input type="hidden" name="id" defaultValue={alumno.id} />
            <input type="text" name="nombre" defaultValue={alumno.nombre} />
            <input type="text" name="localidad" defaultValue={alumno.localidad} />
            <input type="date" name="fecha_nacimiento" defaultValue={alumno.fecha_nacimiento.toISOString().split('T')[0]} />
            <button>Modificar</button>
        </form>

    </div>
    );
}

export default PageModificar;