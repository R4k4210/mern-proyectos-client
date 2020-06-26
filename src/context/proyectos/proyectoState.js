import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types'; //Como el archivo se llama index.js no necesito especificarlo

const ProyectoState = props => {
            
    const proyectos = [
        {id: 1, nombre: 'Tienda virtual'},
        {id: 2, nombre: 'Tienda no viortual'},
        {id: 3, nombre: 'Tienda web'},
        {id: 4, nombre: 'Mern'}
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }

    //Dispatch para ejecutar las acciones, nuevo hook
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Se agregan las funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    const obtenerProyectos = () => {

        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        });
    }

    const agregarProyecto = proyecto => {
        proyecto.id = uuid();
        //insertamos el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: proyecto
        });
    }

    //valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    }

    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        });
    }

    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        });
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto         
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;