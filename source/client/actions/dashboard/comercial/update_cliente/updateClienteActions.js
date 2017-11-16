import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  CHANGE_CONTACT,
  UPDATE_CLIENTE_SUCCESS,
  UPDATE_CLIENTE_FAILURE,
  UPDATE_CLIENT_INIT,
  RESET_STATE,
} from './types';
import API from './api';

/* Actions Creators */
export function resetState() {
  return {
    type: RESET_STATE,
  };
}

export function addContact() {
  return {
    type: ADD_CONTACT,
  };
}

export function removeContact() {
  return {
    type: REMOVE_CONTACT,
  };
}
export function changeContact(number) {
  return {
    type: CHANGE_CONTACT,
    payload: number,
  };
}

function saveClientSuccess() {
  return {
    type: UPDATE_CLIENTE_SUCCESS,
  };
}

function saveClientFailure(error) {
  return {
    type: UPDATE_CLIENTE_FAILURE,
    payload: error,
  };
}

// Actions Creators (Async)

export function updateClient(client, id) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: UPDATE_CLIENT_INIT,
      };
    });

    try {
      await API.client.update(client, id);
      return dispatch(saveClientSuccess());
    } catch (error) {
      return dispatch(saveClientFailure(error));
    }
  };
}
