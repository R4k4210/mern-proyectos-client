import React, { useContext, useEffect, Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const RutaPrivada = ({ component: Component, ...props }) => {
    //HIGHER ORDER COMPONENT
    //Con esto chequeamos si el usuario esta autenticado
    const authContext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authContext;

    //Con esto forzamos que autenticado persista, sino al refrescar nos envia al login.
    useEffect(() => {
        usuarioAutenticado();
    }, []);

    return (
        //En caso de que no este autenticado, lo enviamos a la pagina de inicio, si esta autenticado lo mandamos al componente.
        <Route { ...props } render={ props => !autenticado && !cargando ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        )}
        />
    );

}

export default RutaPrivada;