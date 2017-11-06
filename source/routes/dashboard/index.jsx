import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

/* Component */
import Header from '../header/Header.jsx';
import Nav from '../nav/Nav.jsx';
import Home from './home/Home.jsx';

/* Cliente */
import SaveTomaDeInformacion from './comercial/save_toma_de_informacion/SaveTomaDeInformacion.jsx';
import SaveCliente from './comercial/save_cliente/SaveCliente.jsx';

/* Dam */
import SaveCotizacion from './dam/save_cotizacion/SaveCotizacion.jsx';
import ListCotizacion from './dam/list_cotizacion/ListCotizacion.jsx';
import SummaryCotizacion from './dam/summary_cotizacion/SummaryCotizacion.jsx';
import UpdateCotizacion from './dam/update_cotizacion/updateCotizacion.jsx';
const Dashboard = props => (
  	<main>
  		<Header />
  		<Nav />
  		<Route exact path={props.match.path} component={Home} />
        <Route path={`${props.match.path}/SaveCliente`} component={SaveCliente} />
      	<Route path={`${props.match.path}/SaveTomaDeInformacion`} component={SaveTomaDeInformacion} />
      	<Route path={`${props.match.path}/SaveCotizacion`} component={SaveCotizacion} />
      	<Route path={`${props.match.path}/ListCotizacion`} component={ListCotizacion} />
      	<Route path={`${props.match.path}/SummaryCotizacion`} component={SummaryCotizacion} />
      	<Route path={`${props.match.path}/UpdateCotizacion`} component={UpdateCotizacion} />
  	</main>
);

export default Dashboard;
