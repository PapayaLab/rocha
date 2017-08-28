import { REQUEST_SINGUP, RECEIVE_SINGUP } from '../actions/singUpActions';

const singUp = (state = [], action = {}) => {
  switch (action.type) {
    case REQUEST_SINGUP: {
      console.log(action.message, action.name);
      return state;
    }
    case RECEIVE_SINGUP: {
      console.log(action.message, action.name, action.response);
      return state;
    }
    default: {
      return state;
    }
  }
};

export default singUp;
