import "grommet/scss/vanilla/index";

import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';

import Dashboard from './Dashboard';
import {GApp} from 'jazasoft';
import Resource from 'jazasoft/components/Resource';

<<<<<<< HEAD
//import GTApp from './GTApp';

//import Button from 'react-bootstrap/lib/Button';
=======
import { Todo, TodoAdd } from './todo';
>>>>>>> test

(function () {

})();



const todoRoute = [
 {
   path: '',
   component: Todo
 },
 {
  path: 'add',
  component: TodoAdd
}
];

const dashboardRoute = [ { path: '', component: Dashboard } ];

render(
  <GApp
    appName="Todo App"
    appShortName="Todo App"
   >
    <Resource label='Dashboard' name='' routes={dashboardRoute} />
    <Resource label='Todo' name='todo' routes={todoRoute} />
  </GApp>, 
  document.getElementById("content")
);

<<<<<<< HEAD
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

=======
>>>>>>> test
