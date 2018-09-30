import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from '../utils/actionTypes';

export default function fetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA });

        return axios.get(`${API_BASE_URL}/v1/ticker?limit=50`)
        .then(res => {
            dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data });
        })
    }
}