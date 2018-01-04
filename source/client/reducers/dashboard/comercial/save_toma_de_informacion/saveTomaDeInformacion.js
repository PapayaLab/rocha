import initialState from './initialState';
import {
  SAVE_TI_INIT,
  SAVE_TI_SUCCESS,
  SAVE_TI_FAILURE,
  RESET_STATE,
} from '../../../../actions/dashboard/comercial/save_toma_de_informacion/types';

export default function saveTiReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TI_INIT:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case SAVE_TI_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false,
      });
    case SAVE_TI_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        send: action.payload,
      });
    case RESET_STATE: {
      return Object.assign({}, state, {
        client: [],
      });
    }
    default:
      return state;
  }
}
