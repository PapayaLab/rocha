import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

/* Component */
import Header from '../header/Header.jsx';
import Nav from '../nav/Nav.jsx';
import Home from './home/Home.jsx';
import FormTomaDeInformacion from './comercial/form_toma_de_informacion/FormTomaDeInformacion.jsx';

/* Style */
import HeaderComponent from '../../client/components/header/HeaderComponent.jsx';

const Dashboard = props => (
  	<main>
  		<Header />
  		<Nav />
  		<Route exact path={props.match.path} component={Home} />
      	<Route path={`${props.match.path}/FormTomaDeInformacion`} component={FormTomaDeInformacion} />
  	</main>
);

export default Dashboard;
