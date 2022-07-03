import React, {useState, useEffect} from 'react';
import { useParams, useNavigate, NavLink } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form";
import {loginServer} from './LoginSlice';

export default function LoginForm(props){

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const status = useSelector(state => state.logins.status);

    const { register, formState: { errors }, handleSubmit } = useForm(/*{
            resolver: yupResolver(projetoSchema)
        }*/);

    function onSubmit(login){
        console.log(login);
        dispatch(loginServer(login));
    }


    useEffect(() => {
        if (status === 'logged_in' ) {
            navigate('/home');
        }
    }, [status])




    return(<>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Login:
                <input type="text" name="username" id="username" {...register('username')} />
                &nbsp;<span id="username_err_msg">{errors.login?.message}</span>
            </label>
            <br/>
            <label>
                Senha:
                <input type="password" name="password" id="password" {...register('password')} />
                &nbsp;<span id="password_err_msg">{errors.password?.message}</span>
            </label>
            <br/>
            <br/>   
            <button type="submit" id="Login" name="btn_login" variant="contained" color="primary">Login</button>
            <li>
                <NavLink to="/signup"> Criar conta </NavLink>
            </li>
            </form>
          </>
    );
}