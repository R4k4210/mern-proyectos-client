import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoProyectos = () => {
    const nodeRef = React.useRef(null); //Esto previene el warning de StrictMode y findDOMNode
    //Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext

    //Obtener proyectos
    useEffect(() => {

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);

    //Chequear que existan proyectos
    if(proyectos.length === 0) return <p>Comienza a crear tus proyectos</p>;
    
    return (  
        <ul className="listado-proyectos">

            {alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> ) : null}

            <TransitionGroup>
                {proyectos.map(proyecto => (                    
                    <CSSTransition
                        nodeRef={nodeRef}
                        key={proyecto._id}
                        timeout={300}
                        classNames="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}
 
export default ListadoProyectos;