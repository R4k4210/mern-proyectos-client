import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;

    const onChangeInput = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        //

    }

    return (  
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={onChangeInput}
                            value={email}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            onChange={onChangeInput}
                            value={nombre}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            onChange={onChangeInput}
                            value={password}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite password"
                            onChange={onChangeInput}
                            value={confirmar}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" value="Registrar" className="btn btn-primario btn-block"/>
                    </div>
                </form>

                <Link to={'/'} className='enlace-cuenta'>
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;