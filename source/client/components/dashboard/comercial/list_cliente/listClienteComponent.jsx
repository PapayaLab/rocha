import React from 'react';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

const ListClienteComponent = () => (
  <div className={DashBoardStyle.main}>
    <div className={DashBoardStyle.title}>
      <h3>Listado Cliente</h3>
    </div>

    <div className={DashBoardStyle.module_filter}>
      <div className={DashBoardStyle.item_filter}>
        <label htmlFor="cliente">Cliente</label>
        <input autoComplete="off" type="text" id="cliente" name="cliente" />
      </div>
      <div className={DashBoardStyle.item_filter}>
        <label htmlFor="director">Director</label>
        <input autoComplete="off" type="text" id="director" name="director" />
      </div>
      <div className={DashBoardStyle.item_filter} >
        <label htmlFor="empre">Empresa</label>
        <select id="empresa" name="empresa">
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

    <div className={DashBoardStyle.module_table_new}>
      <table className={DashBoardStyle.table_normal}>
        <thead>
          <tr>
            <th>Acciones</th>
            <th>Cliente</th>
            <th>Empresa</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select required>
                <option value="">Seleccione</option>
                <option value="1">Descripción</option>
                <option value="1">Generar PDF</option>
                <option value="1">Resumen</option>
              </select>
            </td>
            <td>LC - 1000</td>
            <td>María Perez Zapata</td>
            <td>Miguel Pinto Gutierrez</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className={DashBoardStyle.module_view_more}>
      <button> Ver Más </button>
    </div>
  </div>
);

export default ListClienteComponent;
