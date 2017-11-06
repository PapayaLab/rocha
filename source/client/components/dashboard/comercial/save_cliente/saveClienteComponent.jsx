import React from 'react';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

const SaveClienteComponent = () => (
  <div className={DashBoardStyle.main}>
    <div className={DashBoardStyle.title}>
      <h3>Ingreso cliente</h3>
    </div>
    <div className={DashBoardStyle.module_form}>
      <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
        <h4>Datos principales Clientes</h4>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="rut">Rut Cliente</label>
        <input required type="text" id="rut" name="rut" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="cliente">Cliente</label>
        <input required type="text" id="cliente" name="cliente" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="razon">Razón Social</label>
        <input required type="text" id="razon" name="razon" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="giro">Giro</label>
        <input required type="text" id="giro" name="giro" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="rubro">Rubro</label>
        <input required type="text" id="rubro" name="rubro" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="numeroEmpleados">Número Empleados</label>
        <input required type="number" id="numeroEmpleados" name="numeroEmpleados" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="tipoCliente">Tipo Cliente</label>
        <select required id="tipoCliente" name="tipoCliente">
          <option value="">Seleccioné</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="mercado">Mercado</label>
        <select required id="mercado" name="mercado">
          <option value="">Seleccioné</option>
          <option value="Privado">Privado</option>
          <option value="Convenio Marco">Convenio Marco</option>
        </select>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="empresa">Empresa</label>
        <select required id="empresa" name="empresa">
          <option value="">Seleccioné</option>
          <option value="Rocha S.A">Rocha S.A</option>
          <option value="Sillas y Sillas S.A">Sillas y Sillas</option>
          <option value="Muebles y Diseños S.A">Muebles y Diseños S.A</option>
          <option value="Transporte jj Limitada">Tranporte jj Limitada</option>
        </select>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="sucursal">Sucursal</label>
        <select required id="sucursal" name="sucursal">
          <option value="">Seleccioné</option>
          <option value="Los Conquistadores">Los conquistadores</option>
          <option value="La Dehesa">La dehesa</option>
          <option value="Camino Lonquen">Camino Lonquen</option>
        </select>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="director">Director Proyecto</label>
        <input required type="number" id="director" name="director" />
      </div>
    </div>

    <div className={DashBoardStyle.module_add_row}>
      <label htmlFor="btnRow"> Cantidad Contactos: </label>
      <button> - </button>
      <input type="number" id="btnRow" />
      <button> + </button>
    </div>

    <div className={DashBoardStyle.module_form}>
      <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
        <h4>Contacto Cliente</h4>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="nombreContacto">Nombre Contacto</label>
        <input required type="text" id="nombreContacto" name="nombreContacto" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="apellidoContacto">Apellido Contacto</label>
        <input required type="text" id="apellidoContacto" name="apellidoContacto" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="mailContacto">Mail Contacto</label>
        <input required type="text" id="mailContacto" name="mailContacto" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="telefonoContacto">Telefono Contacto</label>
        <input required type="text" id="telefonoContacto" name="telefonoContacto" />
      </div>
    </div>

    <div className={DashBoardStyle.module_form}>
      <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.title}`}>
        <h4>Datos Pago</h4>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="facturacion">Facturación electronica</label>
        <input required type="text" id="facturacion" name="facturacion" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="correoFacturacion">Correo Facturación</label>
        <input required type="text" id="correoFacturacion" name="correoFacturacion" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="FormaPago">Forma De Pago</label>
        <select required id="FormaPago" name="FormaPago">
          <option value="Seleccioné">Seleccioné</option>
          <option value="100% Contado">100% Contado</option>
          <option value="50% Contado - 50% Entrega">50% Contado - 50% Entrega</option>
          <option value="50% Contado - 40% Entrega - 10% 30 días">50% Contado - 40% Entrega - 10% 30 días</option>
          <option value="100% 30 días">100% 30 días</option>
          <option value="100% 60 días">100% 60 días</option>
          <option value="100% 90 días">100% 90 días</option>
          <option value="3 cuotas">3 cuotas</option>
          <option value="6 cuotas">6 cuotas</option>
          <option value="12 cuotas">12 cuotas</option>
        </select>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="contactoProveedores">Contacto Proveedores</label>
        <input required type="text" id="contactoProveedores" name="contactoProveedores" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="telefonoProveedores">Telefono Proveedores</label>
        <input required type="text" id="telefonoProveedores" name="telefonoProveedores" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="mailProveedores">Mail Proveedores</label>
        <input required type="text" id="mailProveedores" name="mailProveedores" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="medioPago">Medio de Pago</label>
        <select required id="medioPago" name="medioPago">
          <option value="Seleccioné">Seleccioné</option>
          <option value="Tranferencia">Tranferencia</option>
          <option value="Cheque">Cheque</option>
          <option value="Vale Vista">Vale Vista</option>
          <option value="Efectivo">Efectivo</option>
          <option value="Transbanc">Transbanc</option>
        </select>
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="direccionPago">Dirección Pago</label>
        <input required type="text" id="direccionPago" name="direccionPago" />
      </div>

      <div className={DashBoardStyle.item_form}>
        <label htmlFor="bancoCliente">Banco Cliente</label>
        <select required id="bancoCliente" name="bancoCliente">
          <option value="Seleccioné">Seleccioné</option>
          <option value="Banco Estado">Banco Estado</option>
        </select>
      </div>
    </div>

    <div className={`${DashBoardStyle.module_form} ${DashBoardStyle.button}`}>
      <div className={`${DashBoardStyle.item_form} ${DashBoardStyle.button}`}>
        <input type="submit" value="Ingresar" />
      </div>
    </div>
  </div>
);

export default SaveClienteComponent;
