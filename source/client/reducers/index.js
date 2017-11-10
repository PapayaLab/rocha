import { combineReducers } from 'redux';

import singUp from './singUp';
import saveCotizacion from './dashboard/dam/save_cotizacion/saveCotizacion';
import saveCliente from './dashboard/comercial/save_cliente/saveCliente';

const reducer = combineReducers({
  singUp,
  saveCotizacion,
  saveCliente,
});

export default reducer;
