import {
  ADD_CONTACT,
  SAVE_CLIENTE_SUCCESS,
  SAVE_CLIENTE_FAILURE,
  SAVE_CLIENT_INIT,
} from './types';
import API from './api';

/* Actions Creators */
export function addContact(item) {
  return {
    type: ADD_CONTACT,
    payload: item,
  };
}

function saveClientSuccess() {
  return {
    type: SAVE_CLIENTE_SUCCESS,
  };
}

function saveClientFailure(error) {
  return {
    type: SAVE_CLIENTE_FAILURE,
    payload: error,
  };
}

// Actions Creators (Async)

export function saveClient(product) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: SAVE_CLIENT_INIT,
      };
    });

    try {
      await API.client.save(product);
      return dispatch(saveClientSuccess());
    } catch (error) {
      return dispatch(saveClientFailure(error));
    }
  };
}
