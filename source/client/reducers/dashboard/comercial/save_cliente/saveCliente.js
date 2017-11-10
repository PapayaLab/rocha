import initialState from './initialState';
import {
  SAVE_CLIENT_INIT,
  SAVE_CLIENT_SUCCESS,
  SAVE_CLIENT_FAILURE,
  ADD_CONTACT,
} from '../../../../actions/dashboard/comercial/save_cliente/types';

export default function saveClientReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CLIENT_INIT:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case SAVE_CLIENT_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false,
      });
    case SAVE_CLIENT_SUCCESS:
      return Object.assign({}, state, {
        client: [...state.client, action.payload],
        loading: false,
        error: null,
      });
    case ADD_CONTACT: {
      return Object.assign({}, state, {
        contacto: (state.productos + 1),
      });
    }
    default:
      return state;
  }
}
