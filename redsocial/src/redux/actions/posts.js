import axios from 'axios';
import store from '../store';

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

// POST ONE
export const postOne = async(post_id) => {
    console.log("funciona")
    const res = await axios.get(`http://localhost:8000/api/v1/posts/id/${post_id}`,{
        headers: {
            Authorization: "Bearer " + localStorage.getItem('authToken')
        }
    })
    console.log(res.data)
    store.dispatch({ 
        type: 'POST_DETAIL',
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

// UPDATE POST
export const updatePost = async(post, id) => {
    console.log(post)
    try {
        const res = await axios.put(`http://localhost:8000/api/v1/posts/${id}`, post, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('authToken')
            }
        })
        // store.dispatch({
        //     type: 'UPDATE_POST',
        //     products: res.data
        // })
        // products();
    } catch (error) {
        console.error(error)
    }
}

// DELETE POST
export const deletePost = async(post_id) => {
    console.log(post_id);
    console.log(localStorage.getItem('authToken'));
    try {
        const res = await axios.delete(`http://localhost:8000/api/v1/posts/${post_id}`,{}, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('authToken')
            }
        })
        // store.dispatch({
        //     type: 'DELETE_POST',
        //     products: res.data
        // })
    } catch (error) {
        console.error(error)
    }
}

// export const comentar = async(_id) => {
//     try {
//         const res = await axios.post('http://localhost:8000/api/v1/comments') //hacemos la petición para obtener ese producto en detalle
//         store.dispatch({
//             type: 'GET_POST_DETAIL',
//             payload: res.data
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }

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