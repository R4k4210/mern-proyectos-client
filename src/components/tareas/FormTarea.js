import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer proyecto activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Extraer funcion del context de tareas
    const tareasContext = useContext(tareaContext);
    const { errortarea, 
        agregarTarea, 
        validarTarea, 
        obtenerTareas, 
        tareaseleccionada, 
        actualizarTarea,
        limpiarTarea } = tareasContext;

    //useEffect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada);
        }else{
            guardarTarea({
                nombre: ''
            });
        }
    }, [tareaseleccionada]);

    //State del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    });

    const { nombre } = tarea;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;

    const [proyectoActual] = proyecto;


    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        //Validamos
        if(nombre.trim() === ""){
            validarTarea();
            return;
        }
        //Revisa si es edición o nueva tarea
        if(tareaseleccionada === null){
            //Agregar la tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }else{
            actualizarTarea(tarea);
            limpiarTarea();
        }
        //Obtener las tareas actualizadas
        obtenerTareas(proyectoActual.id);
        //reiniciar form
        guardarTarea({
            nombre: ''
        });

    }

    return (  

        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn bnt-primario btn-submit btn-block"
                        value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
                    />
                </div>
            </form>

            {errortarea ?  <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}

        </div>

    );
}
 
export default FormTarea;