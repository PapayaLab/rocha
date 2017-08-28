import fetch from 'isomorphic-fetch';
//import { SING_UP, SING_OUT } from './types';

const baseUrl = 'http://localhost:3000';

/*
export const singUp = form => ({
  type: SING_UP,
  data: fetch(`${baseUrl}/api/users`)
    .then(
      response => response.json(),
      error => console.log('SALIO ERROR PAPU', error),
    )
    .then(json => json),
});
export const singOut = form => ({
  type: SING_OUT,
  form,
});
*/


export const REQUEST_SINGUP = 'REQUEST_SINGUP';
export const requestSingUp = name => ({
  type: REQUEST_SINGUP,
  name,
  message: 'peticion del singup',
});

export const RECEIVE_SINGUP = 'RECEIVE_SINGUP';
export const receiveSingUp = (name, response) => ({
  type: RECEIVE_SINGUP,
  name,
  message: 'se recivio el singup',
  response,
});

export const singUp = (form) => {
  return (dispatch) => {
    dispatch(requestSingUp(form[0]));

    return fetch(`${baseUrl}/api/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ form }),
    })
      .then(
        response => response.text(),
        error => console.log('Salto Error Papiu.', error),
      )
      .then(json =>
        dispatch(receiveSingUp(form[0], json)),
      );
  };
};
