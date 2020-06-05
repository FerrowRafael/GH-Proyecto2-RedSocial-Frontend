import axios from 'axios';
import store from '../store';
// import { API_URL } from '../../api-config'

// GET ALL POSTS
export const postsAll = async() => {
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
export const addPost = async(formData) => {
    try {
        const res = await axios.post('http://localhost:8000/api/v1/posts', formData, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('authToken')
            }
        })
        store.dispatch({
            type: 'ADD_POST',
            products: res.data
        })
        // products();
    } catch (error) {
        console.error(error)
    }
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

// NOMBRE BUSQUEDAS
export const rdx_resultName = (resultName) => {
	store.dispatch({
		type: 'SEARCH_NAME',
		payload: resultName
	})
};

// SEARCH RESULT
export const rdx_result = async(busqueda) => {
    const res = await axios.get('http://localhost:8000/api/v1/posts/search/' + busqueda)
	store.dispatch({
		type: 'SEARCH_RESULT',
		payload: res.data
	})
};