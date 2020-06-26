import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const onChangeInput = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

    }

    return (  
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesión</h1>

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

                    <div className="campo-form">
                        <input type="submit" value="Iniciar Sesión" className="btn btn-primario btn-block"/>
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Obtener nueva cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;