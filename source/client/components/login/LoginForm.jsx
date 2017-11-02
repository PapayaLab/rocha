import React from 'react';
import { Link } from 'react-router-dom';
import s from './LoginForm.css';

//console.log(s[0][1]);

const LoginForm = props => (
  <form onSubmit={(e) => {
    e.preventDefault();
    props.onClick([e.target.elements[0].value, e.target.elements[1].value]);
  }}
  >
    {console.log(props)}
    {props.loading && <h1>loading</h1>}
    <h1 className={s.titulo}>Login</h1>
    <Link to="/dashboard">Back to home</Link>
    <input
      type="text"
    />
    <input
      type="password"
    />
    <div className="form-group">
      <button
        className="btn btn-primary btn-lg"
      >Login</button></div>
  </form>
);

export default LoginForm;
