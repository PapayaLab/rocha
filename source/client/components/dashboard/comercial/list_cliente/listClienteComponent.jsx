import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Component */

import ClientList from './clientList';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

class ListClienteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skip: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitMore = this.handleSubmitMore.bind(this);
  }

  async componentWillMount() {
    const client = {
      cliente: null,
      director: null,
      empresa: null,
      skip: 0,
      limit: 1,
    };
    await this.props.actions.fetchClients(client);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const client = {
      cliente: (this.clienteInput.value !== '') ? this.clienteInput.value : null,
      director: (this.directorInput.value !== '') ? this.directorInput.value : null,
      empresa: (this.empresaInput.value !== '') ? this.empresaInput.value : null,
      skip: 0,
      limit: 1,
    };
    this.setState({ skip: 1 });
    await this.props.actions.fetchClients(client);
  }

  async handleSubmitMore(event) {
    event.preventDefault();
    const client = {
      cliente: (this.clienteInput.value !== '') ? this.clienteInput.value : null,
      director: (this.directorInput.value !== '') ? this.directorInput.value : null,
      empresa: (this.empresaInput.value !== '') ? this.empresaInput.value : null,
      skip: this.state.skip,
      limit: 1,
    };
    this.setState({ skip: this.state.skip + 1 });
    await this.props.actions.fetchClientsMore(client);
  }
  render() {
    return (
      <div className={DashBoardStyle.main}>
        <div className={DashBoardStyle.title}>
          <h3>Listado Cliente</h3>
        </div>
        <form onSubmit={this.handleSubmit} method="GET">
          <div className={DashBoardStyle.module_filter}>
            <div className={DashBoardStyle.item_filter}>
              <label htmlFor="cliente">Cliente</label>
              <input autoComplete="off" type="text" id="cliente" name="cliente" ref={node => this.clienteInput = node} />
            </div>
            <div className={DashBoardStyle.item_filter}>
              <label htmlFor="director">Director</label>
              <input autoComplete="off" type="text" id="director" name="director" ref={node => this.directorInput = node} />
            </div>
            <div className={DashBoardStyle.item_filter} >
              <label htmlFor="empre">Empresa</label>
              <select id="empresa" name="empresa" ref={node => this.empresaInput = node} >
                <option value="">Seleccione</option>
                <option value="Rocha S.A">Rocha S.A</option>
                <option value="Sillas y Sillas S.A">Sillas y Sillas</option>
                <option value="Muebles y Diseños S.A">Muebles y Diseños S.A</option>
                <option value="Transporte jj Limitada">Tranporte jj Limitada</option>
              </select>
            </div>
            <div className={DashBoardStyle.item_filter}>
              <input value="Buscar" type="submit" />
            </div>
          </div>
        </form>
        <ClientList
          loading={this.props.loading}
          clientes={this.props.clientes}
        />

        <div className={DashBoardStyle.module_view_more}> 
          <button onClick={this.handleSubmitMore}> Más </button>
        </div>
      </div>
    );
  }
}



ListClienteComponent.propTypes = {
  clientes: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ListClienteComponent;
