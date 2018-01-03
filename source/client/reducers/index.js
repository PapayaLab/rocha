import { combineReducers } from 'redux';

import singUp from './singUp';
import saveCotizacion from './dashboard/dam/save_cotizacion/saveCotizacion';
import saveTomaDeInformacion from './dashboard/comercial/save_toma_de_informacion/saveTomaDeInformacion';
import saveCliente from './dashboard/comercial/save_cliente/saveCliente';
import listCliente from './dashboard/comercial/list_cliente/listCliente';
import updateCliente from './dashboard/comercial/update_cliente/updateCliente';
import autocomplete from './dashboard/autocomplete/autocomplete';

const reducer = combineReducers({
  singUp,
  saveTomaDeInformacion,
  saveCotizacion,
  saveCliente,
  listCliente,
  updateCliente,
  autocomplete,
});

export default reducer;
