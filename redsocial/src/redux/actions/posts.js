import axios from 'axios';
import store from '../store';
// import { API_URL } from '../../api-config'

// GET ALL POSTS
export const postsAll = async() => {
    console.log("hola")
    const res = await axios.get('http://localhost:8000/api/v1/posts',{
        headers: {
            Authorization: "Bearer " + localStorage.getItem('authToken')
        }
    })
    console.log(res);
    store.dispatch({ 
        type: 'POSTS_ALL',
        payload: res.data
    });
};

// CREATE POST
export const addPost = async() => {

    const res = await axios.post('http://localhost:8000/api/v1/likes', {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    });
    store.dispatch({ 
        type: 'ADD_POST',
        payload: res.data
    });
    
}

export const comentar = async(_id) => {
    try {
        const res = await axios.post('http://localhost:8000/api/v1/comments') //hacemos la petición para obtener ese producto en detalle
        store.dispatch({
            type: 'GET_POST_DETAIL',
            payload: res.data
        })
    } catch (error) {
        console.error(error)
    }
}