import axios from 'axios';
import store from '../store';
// import { API_URL } from '../../api-config'

// COMMENTS
export const comentar = async(comment, id) => {
    console.log(localStorage.getItem('authToken'))

    const res = await axios.post('http://localhost:8000/api/v1/comments/' , comment,{
        headers: {
            Authorization: "Bearer " + localStorage.getItem('authToken')
        }
    })
    .catch(console.error)
    console.log(res);
    store.dispatch({ 
        type: 'ADD_COMMENT',
        payload: res.data
    });
};