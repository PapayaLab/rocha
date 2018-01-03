import {
  FETCH_CLIENTS_AU_INIT,
  FETCH_CLIENTS_AU_SUCCESS,
  FETCH_CLIENTS_AU_FAILURE,
} from './types';
import API from './api';

/* Actions Creators */
function fetchClientsSuccess(clients) {
  return {
    type: FETCH_CLIENTS_AU_SUCCESS,
    payload: clients,
  };
}

function fetchClientsFailure(error) {
  return {
    type: FETCH_CLIENTS_AU_FAILURE,
    payload: error,
  };
}

function fetchClientsInit() {
  return {
    type: FETCH_CLIENTS_AU_INIT,
  };
}

// Actions Creators (Async)

export function fetchClients(client) {
  return async (dispatch) => {
    dispatch(fetchClientsInit());
    try {
      const data = await API.clients.getAll(client);
      dispatch(fetchClientsSuccess(data.clients));
    } catch (error) {
      dispatch(fetchClientsFailure(error));
    }
  };
}
