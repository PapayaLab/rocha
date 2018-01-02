import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import _ from 'lodash';

/* Component */
import Title from './title';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

class SaveTomaDeInformacionComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.autocompleteClient = this.autocompleteClient.bind(this);

    this.state = { value: '' };
  }
  componentWillMount() {
    this.props.actions.resetState();
  }
  async handleSubmit(event) {
    event.preventDefault();

    const ti = {
      numero_ti: this.numeroInput.vale,
      fecha_realizacion: this.fechaRInput.value,
      puestos: this.puestosInput.value,
      proyecto: this.proyectoInput.value,
      direccion_factura: this.direccionFacturaInput.value,
      direccion_entrega: this.direccionEntregaInput.value,
      director_proyecto: this.directorProyectoInput.value,
    };

    await this.props.actions.saveTi(ti);
    this.props.history.push("/dashboard/listCliente"); /* Podemos enviar el state como segundo parametro */
  }

  async autocompleteClient(value) {
    event.preventDefault();
    const client = {
      cliente: value,
      director: null,
      empresa: null,
      skip: 0,
      limit: 100,
    };
    await setTimeout(()=>{
       this.props.actionsCliente.fetchClients(client);
    },300); 
  }

  render() {
    console.log(this.props.clientes)
    return (
      <div className={DashBoardStyle.main}>
        <Title />
        <form onSubmit={this.handleSubmit}>
          <div className={DashBoardStyle.module_form}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
              <h4>Datos principales Toma de información</h4>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="numero">Número Ti</label>
              <input type="number" required id="numero" ref={node => this.numeroInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="proyecto">Proyecto</label>
              <input type="text" required id="proyecto" ref={node => this.proyectoInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="fechaR">Fecha Realización</label>
              <input type="date" className={DashBoardStyle.module_form_date}  required id="fechaR" ref={node => this.fechaRInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="puestos">Puestos</label>
              <input type="number" required id="puestos" ref={node => this.puestosInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="direccionFactura">Dirección factura</label>
              <input type="text" required id="direccionFactura" ref={node => this.direccionFacturaInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="direccionEntrega">Dirección entrega</label>
              <input type="text" required id="direccionEntrega" ref={node => this.direccionEntregaInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="directorProyecto">Director proyecto</label>
              <input type="text" required id="directorProyecto" ref={node => this.directorProyectoInput = node} />
            </div>
          </div>

          <div className={DashBoardStyle.module_form}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
              <h4>Cliente</h4>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="cliente">Cliente</label>
              <Autocomplete
                items={this.props.clientes}
                getItemValue={(item) => item.cliente}
                wrapperStyle={{ position: 'relative', background: '#fff', border: 'solid 1px #ccc', padding: '.5em .3em' }}
                menuStyle={{ position: 'absolute', width: '100%', top: '36px', left: '0', zIndex: 2 }}
                value={this.state.value}
                onChange={(event, value) => {
                  this.autocompleteClient(value);
                  this.setState({ value });
                }}    
                onSelect={ (value) => {
                  this.setState({ value });
                }}
                renderItem={(item, isHighlighted) =>
                  <div className={` ${DashBoardStyle.autocomplete} ${isHighlighted ? DashBoardStyle.autocomplete_color : ''}`}>
                    {item.cliente}
                  </div>
                }
              />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="rutcliente">Rut cliente</label>
              <input type="text" required id="rutCliente" ref={node => this.rutClienteInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="contactoCliente">Contacto Cliente</label>
              <select id="contactoCliente" name="contactoCliente" ref={node => this.contactoClienteInput = node}>
                <option value="">Seleccioné</option>
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="nombreContacto">Nombre</label>
              <input type="text" required id="nombreContacto" ref={node => this.nombreContactoInput = node} />
            </div>

          </div>

          <div className={`${DashBoardStyle.module_form} ${DashBoardStyle.button}`}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.button}`}>
              <input type="submit" value="Ingresar" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SaveTomaDeInformacionComponent.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default SaveTomaDeInformacionComponent;
