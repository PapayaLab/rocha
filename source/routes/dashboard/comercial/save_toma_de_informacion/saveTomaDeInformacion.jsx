import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import * as clientActions from '../../../../client/actions/dashboard/comercial/save_cliente/saveClienteActions';
import SaveTomaDeInformacionComponent from '../../../../client/components/dashboard/comercial/save_toma_de_informacion/SaveTomaDeInformacionComponent.jsx';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

const saveCliente = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveTomaDeInformacionComponent);

export default saveCliente;
