import initialState from './initialState';
import {
  UPDATE_CLIENT_INIT,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAILURE,
  ADD_CONTACT,
  REMOVE_CONTACT,
  CHANGE_CONTACT,
  RESET_STATE,
} from '../../../../actions/dashboard/comercial/update_cliente/types';

export default function updateClientReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CLIENT_INIT:
    console.log("caca");
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case UPDATE_CLIENT_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false,
      });
    case UPDATE_CLIENT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
      });
    case ADD_CONTACT: {
      return Object.assign({}, state, {
        contacto: (state.contacto + 1),
      });
    }
    case REMOVE_CONTACT: {
      return Object.assign({}, state, {
        contacto: (state.contacto - 1 > 0) ? (state.contacto - 1) : 1,
      });
    }
    case CHANGE_CONTACT: {
      return Object.assign({}, state, {
        contacto: (action.payload > 0) ? action.payload : 1,
      });
    }
    case RESET_STATE: {
      return Object.assign({}, state, {
        contacto: 1,
      });
    }
    default:
      return state;
  }
}
