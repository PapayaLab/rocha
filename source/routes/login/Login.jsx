import { connect } from 'react-redux';
import { singUp } from '../../client/actions/singUpActions';

import LoginForm from '../../client/components/login/LoginForm';

const mapDispatchToProps = dispatch => ({
  onClick: (form) => {
    dispatch(singUp(form));
  },
});

const Login = connect(
  null,
  mapDispatchToProps,
)(LoginForm);

export default Login;
