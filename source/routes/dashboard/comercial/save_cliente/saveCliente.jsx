import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as clientActions from '../../../../client/actions/dashboard/comercial/save_cliente/saveClienteActions';
import SaveClienteComponent from '../../../../client/components/dashboard/comercial/save_cliente/saveClienteComponent';

function mapStateToProps(state) {
  return {
    contacto: state.reducer.saveCliente.contacto,
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
