import React from 'react';
import PropTypes from 'prop-types';

import css from './LoginForm.css';

const LoginForm = ({ onClick }) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    onClick([e.target.elements[0].value, e.target.elements[1].value]);
  }}
  >
    <h1 className={css.titulo}>Login</h1>
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

LoginForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoginForm;
