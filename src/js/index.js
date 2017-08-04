import "grommet/scss/vanilla/index";

import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';

import { GApp } from 'jazasoft';
import { AuthClient, RestClient } from 'jazasoft/rest';
import Resource from 'jazasoft/components/Resource';

//import GTApp from './GTApp';

//import Button from 'react-bootstrap/lib/Button';

(function () {
 window.sessionStorage.clientToken = btoa('client:secret');
})();

const res11 = (props) => {
 return (
  <div style={{marginTop: 100}}>
    <Link to='/create' > Create </Link> <br/>
    Hello Resource 1.1 
  </div>
 )
};

const res12 = (props) => {
 return (
   <div style={{marginTop: 100}}><Link to='/ab' > Home </Link> <br/>Resource 1.2</div>
 )
};

const res21 = (props) => {
 return (
   <div style={{marginTop: 100}}><Link to='/create' > Create </Link> <br/> Resource 2.1</div>
 )
};

const res22 = (props) => {
 return (
   <div style={{marginTop: 100}}><Link to='/' > Home </Link> <br/>Resource 2.2</div>
 )
};

const routes1 = [
 {
   path: '',
   component: res11
 },
 {
   path: 'create',
   component: res12
 }
];

const routes2 = [
 {
   path: '',
   component: res12
 },
 {
   path: 'create',
   component: res22
 }
];


render(
  <GApp restClient={RestClient('http://localhost:8003/api')} authClient={AuthClient('http://localhost:8003/oauth')} 
    appName="Time and Action Calender"
    appShortName="TNA"
   >
    <Resource label='Resource 1' name='res1' routes={routes1} />
  </GApp>, 
  document.getElementById("content")
);

// render(
//   <GTApp />, 
//   document.getElementById("content")
// );

// render(
//   <div>
//     <Button bsStyle="primary"> Primary</Button>
//     <Button bsStyle="success"> Success</Button>
//     <Button bsStyle="danger"> Warning</Button>
    
//   </div>    
// , document.getElementById("content"));

