import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config'

// LOGIN
export const login = async(user) => {
    const res = await axios.post('http://localhost:8000/api/v1/users/login', user);
    localStorage.setItem('authToken', res.data.token); //guardamos el token en localstorage
    
    store.dispatch({ //this.userService.setUser(res.user)
        type: 'LOGIN',
        payload: res.data.user
    });
}

// LOGOUT   
export const logout = async() => {
    const res = await axios.get(API_URL + '/users/logout', {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    })
    localStorage.removeItem('authToken');
    store.dispatch({
        type: 'LOGOUT'
    })
    return res;
}