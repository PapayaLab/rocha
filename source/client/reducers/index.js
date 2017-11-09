import { combineReducers } from 'redux';

import singUp from './singUp';
import saveCotizacion from './dashboard/dam/save_cotizacion/saveCotizacion';

const reducer = combineReducers({
  singUp,
  saveCotizacion,
});

export default reducer;
