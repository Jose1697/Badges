// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import Badge from './components/Badge';
import './global.css';
import App from './components/App';

// const element = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(<Badge 
//                     firstName="Jose" 
//                     lastName="Artica"
//                     avatar="https://scontent.flim11-1.fna.fbcdn.net/v/t31.0-8/10714001_707236149374026_3227815556900028696_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_ohc=Gd8AdymGP08AX9JnCYv&_nc_ht=scontent.flim11-1.fna&oh=0c45d3fea5733877748717fc0cab83b8&oe=600E0AB1"
//                     jobTitle="Frontend Engineer"
//                     twitter="articajose2"
//                     />, container);
ReactDOM.render(<App />, container);
