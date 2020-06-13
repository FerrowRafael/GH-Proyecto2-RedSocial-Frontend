import axios from 'axios';
import store from '../store';
// import { API_URL } from '../../api-config'

// CATEGORIES ALL PRODUCTS
export const categoriesAll = async() => {
    const res = await axios.get('http://localhost:8000/api/v1/categories',{
        headers: {
            Authorization: "Bearer " + localStorage.getItem('authToken')
        }
    })
    store.dispatch({ 
        type: 'CATEGORIES_ALL',
        payload: res.data
    });
};