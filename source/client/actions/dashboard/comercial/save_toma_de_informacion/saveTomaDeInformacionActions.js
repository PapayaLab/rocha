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

function saveTiSuccess() {
  return {
    type: SAVE_TI_SUCCESS,
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
      await API.ti.save(ti);
      return dispatch(saveTiSuccess());
    } catch (error) {
      return dispatch(saveTiFailure(error));
    }
  };
}
