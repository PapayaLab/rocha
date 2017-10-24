import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

/* Component */
import Header from '../header/Header.jsx';
import Nav from '../nav/Nav.jsx';
import Home from './home/Home.jsx';

import SaveTomaDeInformacion from './comercial/save_toma_de_informacion/SaveTomaDeInformacion.jsx';
import SaveCotizacion from './dam/save_cotizacion/SaveCotizacion.jsx';
import ListCotizacion from './dam/list_cotizacion/ListCotizacion.jsx';

const Dashboard = props => (
  	<main>
  		<Header />
  		<Nav />
  		<Route exact path={props.match.path} component={Home} />
      	<Route path={`${props.match.path}/SaveTomaDeInformacion`} component={SaveTomaDeInformacion} />
      	<Route path={`${props.match.path}/SaveCotizacion`} component={SaveCotizacion} />
      	<Route path={`${props.match.path}/ListCotizacion`} component={ListCotizacion} />
  	</main>
);

export default Dashboard;
