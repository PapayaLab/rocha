import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tomaDeInformacioActions from '../../../../client/actions/dashboard/comercial/save_toma_de_informacion/saveTomaDeInformacionActions';
import SaveTomaDeInformacionComponent from '../../../../client/components/dashboard/comercial/save_toma_de_informacion/SaveTomaDeInformacionComponent.jsx';

import * as clientActions from '../../../../client/actions/dashboard/comercial/list_cliente/listClienteActions';

function mapStateToProps(state) {
  return {
    clientes: state.reducer.listCliente.clientes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tomaDeInformacioActions, dispatch),
    actionsCliente: bindActionCreators(clientActions, dispatch),
  };
}

const saveTomaDeInformacion = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveTomaDeInformacionComponent);

export default saveTomaDeInformacion;
