import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

/* Style */
import DashBoardStyle from '../../../../../../public/dashboard.scss';

const ListCotizacionComponent = props => (
  	<div className={DashBoardStyle.main}>
        <div className={DashBoardStyle.title}>
            <h3>Listado cotización</h3>
        </div>

        <div className={DashBoardStyle.module_filter}>
            <div className={DashBoardStyle.item_filter}>
                <label>Nº Cotización</label>
                <input autoComplete="off" type="text"/>
            </div>
            <div className={DashBoardStyle.item_filter}>
                <label>Ejecutivo</label>
                <input autoComplete="off" type="text"/>
            </div>
            <div className={DashBoardStyle.item_filter}>
                <label>Dibujante</label>
                <input autoComplete="off" type="text"/>
            </div>
            <div className={DashBoardStyle.item_filter} >
              <label>Estado</label>
              <select id="estado" >
                <option value="En Proceso">En Proceso</option>
                <option value="Nulo">Nulo</option>
                <option value="Ok">Ok</option>
              </select>
            </div>
            <div className={DashBoardStyle.item_filter} >
                <label>Fecha Desde</label>
                <input className={DashBoardStyle.module_filter_date} type="text" />
            </div>
            <div className={DashBoardStyle.item_filter} >
                <label>Fecha Hasta</label>
                <input className={DashBoardStyle.module_filter_date} type="text" />
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
                        <th>Nº Cotización</th>
                        <th>Ejecutivo</th>
                        <th>Dibujante</th>
                        <th>Direccion</th>
                        <th>Total</th>
                        <th>Estado</th>
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
                        <td>Santiago Centro lejos</td>
                        <td>5.000</td>
                        <td>Penidente</td>
                    </tr>
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
                        <td>Santiago Centro lejos</td>
                        <td>5.000</td>
                        <td>Penidente</td>
                    </tr>  
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
                        <td>Santiago Centro lejos</td>
                        <td>5.000</td>
                        <td>Penidente</td>
                    </tr>  
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
                        <td>Santiago Centro lejos</td>
                        <td>5.000</td>
                        <td>Penidente</td>
                    </tr>  
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
                        <td>Santiago Centro lejos</td>
                        <td>5.000</td>
                        <td>Penidente</td>
                    </tr>  
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
                        <td>Santiago Centro lejos</td>
                        <td>5.000</td>
                        <td>Penidente</td>
                    </tr>
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
                        <td>Santiago Centro lejos</td>
                        <td>5.000</td>
                        <td>Penidente</td>
                    </tr>  
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
                        <td>Santiago Centro lejos</td>
                        <td>5.000</td>
                        <td>Penidente</td>
                    </tr>        
                </tbody>
            </table> 
        </div>
        <div className={DashBoardStyle.module_view_more}>
            <button> Ver Más </button>
        </div>
    </div>
);

export default ListCotizacionComponent;
