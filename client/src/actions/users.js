import { push } from 'connected-react-router'
import axios from '../services/axios'
import actionTypes from './actionTypes'

export const createUser = user => async (dispatch) => {
    try {
        const { data } = await axios.post('/signup', { user });
        dispatch({ type: actionTypes.USER_CREATE, payload: data });
        dispatch(push('/'));
    } catch (err) {
        console.log(err);
    }
}

export const loginUser = user => async (dispatch) => {
    try {
        const { data } = await axios.post('/login', { user });
        dispatch({
            type: actionTypes.USER_FETCH_CURRENT,
            payload: data
        });
        dispatch(push('/'));
    } catch (err) {
        console.log(err);
    }
}