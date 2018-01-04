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
    this.handleContact = this.handleContact.bind(this);
    this.selectContact = this.selectContact.bind(this);

    this.state = { value: '' };
  }
  componentWillMount() {
    this.props.actions.resetState();
  }
  async handleSubmit(event) {
    event.preventDefault();
    const ti = {
      numero_ti: this.numeroInput.value,
      id_client: this.idClienteInput.value,
      fecha_realizacion: this.fechaRInput.value,
      puestos: this.puestosInput.value,
      proyecto: this.proyectoInput.value,
      direccion_factura: this.direccionFacturaInput.value,
      direccion_entrega: this.direccionEntregaInput.value,
      director_proyecto: this.directorProyectoInput.value,
      fecha_reunion: this.fechaReunionInput.value,
    };

    await this.props.actions.saveTi(ti);
    if(this.props.send.state){
      this.props.history.push("/dashboard/listCliente"); /* Podemos enviar el state como segundo parametro */
    }
  }
  async autocompleteClient(value) {
    event.preventDefault();
    const client = {
      cliente: value,
      skip: 0,
      limit: 100,
    };
    this.props.actionsAutocomplete.fetchClients(client);
  }
  handleContact(item) {

    /* Clear Input */
    document.getElementById('nombreContacto').value = '';
    document.getElementById('apellidoContacto').value = '';
    document.getElementById('mailContacto').value = '';
    document.getElementById('telefonoContacto').value = '';

    document.getElementById('rutCliente').value = item.rut_cliente;
    document.getElementById('idCliente').value = item._id;
    /* Selected contact */
    const selectContact = document.getElementById('contactoCliente');
    const count = selectContact.length;
    let i;

    for (i = 1; i < count; i += 1) {
      selectContact.removeChild(selectContact.options[selectContact.length - 1]);
    }

    item.contacto.forEach((contact) => {
      const option = document.createElement('option');
      option.setAttribute('data-nombre', contact.nombre);
      option.setAttribute('data-apellido', contact.apellido);
      option.setAttribute('data-mail', contact.mail);
      option.setAttribute('data-telefono', contact.telefono);
      option.text = `${contact.nombre} ${contact.apellido}`;
      selectContact.add(option);
    });
  }

  selectContact(event) {
    const select = event.currentTarget.selectedIndex;
    const option = event.currentTarget.options;

    document.getElementById('nombreContacto').value = option[select].dataset.nombre;
    document.getElementById('apellidoContacto').value = option[select].dataset.apellido;
    document.getElementById('mailContacto').value = option[select].dataset.mail;
    document.getElementById('telefonoContacto').value = option[select].dataset.telefono;
  }

  render() {
    console.log(this.props.send)
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
              <input type="date" className={DashBoardStyle.module_form_date} required id="fechaR" ref={node => this.fechaRInput = node} />
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

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="fechaReunion">Fecha Reunión</label>
              <input type="date" className={DashBoardStyle.module_form_date} id="fechaReunion" ref={node => this.fechaReunionInput = node} />
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
                onSelect={(value, item) => {
                  this.handleContact(item);
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
              <label htmlFor="rutCliente">Rut cliente</label>
              <input type="text" required id="rutCliente" ref={node => this.rutClienteInput = node} />
              <input type="hidden" id="idCliente" ref={node => this.idClienteInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="contactoCliente">Contacto Cliente</label>
              <select onChange={this.selectContact} id="contactoCliente" name="contactoCliente" ref={node => this.contactoClienteInput = node}>
                <option value="">Seleccioné</option>
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="nombreContacto">Nombre</label>
              <input type="text" required id="nombreContacto" ref={node => this.nombreContactoInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="apellidoContacto">Apellido</label>
              <input type="text" required id="apellidoContacto" ref={node => this.apellidoContactoInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="mailContacto">Email</label>
              <input type="text" required id="mailContacto" ref={node => this.mailContactoInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="telefonoContacto">Telefono</label>
              <input type="text" required id="telefonoContacto" ref={node => this.telefonoContactoInput = node} />
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
  send: PropTypes.object,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  actionsAutocomplete: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default SaveTomaDeInformacionComponent;
