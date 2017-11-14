import { combineReducers } from 'redux';

import singUp from './singUp';
import saveCotizacion from './dashboard/dam/save_cotizacion/saveCotizacion';
import saveCliente from './dashboard/comercial/save_cliente/saveCliente';
import listCliente from './dashboard/comercial/list_cliente/listCliente';

const reducer = combineReducers({
  singUp,
  saveCotizacion,
  saveCliente,
  listCliente,
});

export default reducer;
