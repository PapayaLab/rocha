import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as clientActions from '../../../../client/actions/dashboard/comercial/save_cliente/saveClienteActions';
import SaveClienteComponent from '../../../../client/components/dashboard/comercial/save_cliente/saveClienteComponent';

function mapStateToProps(state) {
  return {
    contacto: state.reducer.saveCliente.contacto,
    condicionPago: state.reducer.saveCliente.condicionPago,
    medioPago: state.reducer.saveCliente.medioPago,
    banco: state.reducer.saveCliente.banco,
    mercado: state.reducer.saveCliente.mercado,
    empresa: state.reducer.saveCliente.empresa,
    tipoCliente: state.reducer.saveCliente.tipoCliente,
    sucursal: state.reducer.saveCliente.sucursal,
    clienteActivo: state.reducer.saveCliente.clienteActivo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(clientActions, dispatch),
  };
}

const saveCliente = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveClienteComponent);

export default saveCliente;
