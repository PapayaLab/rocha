import {
  SAVE_TI_SUCCESS,
  SAVE_TI_FAILURE,
  SAVE_TI_INIT,
  RESET_STATE,
} from './types';
import API from './api';

/* Actions Creators */
export function resetState() {
  return {
    type: RESET_STATE,
  };
}

function saveTiSuccess(data) {
  return {
    type: SAVE_TI_SUCCESS,
    payload: data,
  };
}

function saveTiFailure(error) {
  return {
    type: SAVE_TI_FAILURE,
    payload: error,
  };
}

function saveTiInit() {
  return {
    type: SAVE_TI_INIT,
  };
}


// Actions Creators (Async)

export function saveTi(ti) {
  return async (dispatch) => {
    dispatch(saveTiInit());
    try {
      const data = await API.ti.save(ti);
      return dispatch(saveTiSuccess(data));
    } catch (error) {
      return dispatch(saveTiFailure(error));
    }
  };
}
