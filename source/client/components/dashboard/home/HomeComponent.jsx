import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

/* Style */
import DashBoardStyle from '../../../../../public/dashboard.scss';

const HomeComponent = props => (
  	<div className={DashBoardStyle.main}>

  		<div className={DashBoardStyle.title}>
        	<h3>Home Se encuentran los componentes que ocuparamos en el sistema</h3>
        </div>

		<div className={DashBoardStyle.module_filter}>
			<div className={DashBoardStyle.item_filter}>
			    <label>Proveedor</label>
			    <input autoComplete="off" type="text"/>
			</div>
			<div className={DashBoardStyle.item_filter}>
			    <label>Proveedor</label>
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
			<div className={DashBoardStyle.item_filter}>
			  <input value="Buscar" type="submit" />
			</div>
		</div>

    </div>
);

export default HomeComponent;
