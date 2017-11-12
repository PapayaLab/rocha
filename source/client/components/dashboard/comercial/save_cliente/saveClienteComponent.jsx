import React, { Component } from 'react';
import _ from 'lodash';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

class SaveClienteComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const client = {
      rut_cliente: this.rutInput.value,
      cliente: this.clienteInput.value,
    };
    await this.props.actions.saveClient(client);
  }

  render() {
    return (
      <div className={DashBoardStyle.main}>
        <form className="offset-lg-3 col-lg-6" onSubmit={this.handleSubmit}>
          <div className={DashBoardStyle.title}>
            <h3>Ingreso cliente</h3>
          </div>
          <div className={DashBoardStyle.module_form}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
              <h4>Datos principales Clientes</h4>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="rut">Rut Cliente</label>
              <input type="text" id="rut" name="rut" ref={node => this.rutInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="cliente">Cliente</label>
              <input type="text" id="cliente" name="cliente" ref={node => this.clienteInput = node} />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="razon">Razón Social</label>
              <input type="text" id="razon" name="razon" />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="giro">Giro</label>
              <input type="text" id="giro" name="giro" />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="rubro">Rubro</label>
              <input type="text" id="rubro" name="rubro" />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="numeroEmpleados">Número Empleados</label>
              <input type="number" id="numeroEmpleados" name="numeroEmpleados" />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="tipoCliente">Tipo Cliente</label>
              <select id="tipoCliente" name="tipoCliente">
                <option value="">Seleccioné</option>
                {
                  this.props.tipoCliente.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="mercado">Mercado</label>
              <select id="mercado" name="mercado">
                <option value="">Seleccioné</option>              
                {
                  this.props.mercado.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="empresa">Empresa</label>
              <select id="empresa" name="empresa">
                <option value="">Seleccioné</option>
                {
                  this.props.empresa.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="sucursal">Sucursal</label>
              <select id="sucursal" name="sucursal">
                <option value="">Seleccioné</option>
                {
                  this.props.sucursal.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="director">Director Proyecto</label>
              <input type="number" id="director" name="director" />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="clienteActivo">Cliente Activo</label>
              <select id="clienteActivo" name="clienteActivo">
                <option value="">Seleccioné</option>
                {
                  this.props.clienteActivo.map((text, i) => {
                    return <option key={i} value={i}>{text}</option>
                  })
                }
              </select>
            </div>
          </div>

          <div className={DashBoardStyle.module_add_row}>
            <label htmlFor="btnRow"> Cantidad Contactos: </label>
            <button> - </button>
            <input type="number" id="btnRow" />
            <button> + </button>
          </div>
          {
          _.times( this.props.contacto, (i) => {
            return (
                <div key={i} className={DashBoardStyle.module_form}>
                  <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
                    <h4>Contacto Cliente</h4>
                  </div>

                  <div className={DashBoardStyle.item_form}>
                    <label htmlFor="nombreContacto">Nombre Contacto</label>
                    <input type="text" id="nombreContacto" name="nombreContacto" />
                  </div>

                  <div className={DashBoardStyle.item_form}>
                    <label htmlFor="apellidoContacto">Apellido Contacto</label>
                    <input type="text" id="apellidoContacto" name="apellidoContacto" />
                  </div>

                  <div className={DashBoardStyle.item_form}>
                    <label htmlFor="mailContacto">Mail Contacto</label>
                    <input type="text" id="mailContacto" name="mailContacto" />
                  </div>

                  <div className={DashBoardStyle.item_form}>
                    <label htmlFor="telefonoContacto">Telefono Contacto</label>
                    <input type="text" id="telefonoContacto" name="telefonoContacto" />
                  </div>
                </div>);
            })
          }

          <div className={DashBoardStyle.module_form}>
            <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
              <h4>Datos Pago</h4>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="facturacion">Facturación electronica</label>
              <input type="text" id="facturacion" name="facturacion" />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="correoFacturacion">Correo Facturación</label>
              <input type="text" id="correoFacturacion" name="correoFacturacion" />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="FormaPago">Forma De Pago</label>
              <select id="FormaPago" name="FormaPago">
                <option value="Seleccioné">Seleccioné</option>
                {
                  this.props.condicionPago.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="contactoProveedores">Contacto Proveedores</label>
              <input type="text" id="contactoProveedores" name="contactoProveedores" />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="telefonoProveedores">Telefono Proveedores</label>
              <input type="text" id="telefonoProveedores" name="telefonoProveedores" />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="mailProveedores">Mail Proveedores</label>
              <input type="text" id="mailProveedores" name="mailProveedores" />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="medioPago">Medio de Pago</label>
              <select id="medioPago" name="medioPago">
                <option value="Seleccioné">Seleccioné</option>
                {
                  this.props.medioPago.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="direccionPago">Dirección Pago</label>
              <input type="text" id="direccionPago" name="direccionPago" />
            </div>

            <div className={DashBoardStyle.item_form}>
              <label htmlFor="bancoCliente">Banco Cliente</label>
              <select id="bancoCliente" name="bancoCliente">
                <option value="Seleccioné">Seleccioné</option>
                {
                  this.props.banco.map((text, i) => {
                    return <option key={i} value={text}>{text}</option>
                  })
                }
              </select>
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

export default SaveClienteComponent;
