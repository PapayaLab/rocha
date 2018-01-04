import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tomaDeInformacioActions from '../../../../client/actions/dashboard/comercial/save_toma_de_informacion/saveTomaDeInformacionActions';
import SaveTomaDeInformacionComponent from '../../../../client/components/dashboard/comercial/save_toma_de_informacion/SaveTomaDeInformacionComponent.jsx';

import * as autocompleteActions from '../../../../client/actions/dashboard/autocomplete/autocompleteActions';

function mapStateToProps(state) {
  return {
    clientes: state.reducer.autocomplete.clientes,
    send: state.reducer.saveTomaDeInformacion.send,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tomaDeInformacioActions, dispatch),
    actionsAutocomplete: bindActionCreators(autocompleteActions, dispatch),
  };
}

const saveTomaDeInformacion = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaveTomaDeInformacionComponent);

export default saveTomaDeInformacion;
