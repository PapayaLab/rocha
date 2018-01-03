import initialState from './initialState';
import {
  FETCH_CLIENTS_AU_INIT,
  FETCH_CLIENTS_AU_SUCCESS,
  FETCH_CLIENTS_AU_FAILURE,
} from '../../../actions/dashboard/autocomplete/types';

export default function saveClientReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CLIENTS_AU_INIT:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case FETCH_CLIENTS_AU_SUCCESS:
      return Object.assign({}, state, {
        clientes: action.payload,
        error: null,
        loading: false,
      });
    case FETCH_CLIENTS_AU_FAILURE:
      return Object.assign({}, state, {
        clientes: [],
        error: action.payload,
        loading: false,
      });
    default:
      return state;
  }
}
