import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

/* Component */
import Header from '../header/Header.jsx';
import Home from './home/Home.jsx';
import FormTomaDeInformacion from './comercial/form_toma_de_informacion/FormTomaDeInformacion.jsx';

const Dashboard = props => (
  	<div>
  		<Header />
  		<Route exact path={props.match.path} component={Home} />
      	<Route path={`${props.match.path}/FormTomaDeInformacion`} component={FormTomaDeInformacion} />
  	</div>
);

export default Dashboard;
