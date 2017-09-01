import "grommet/scss/vanilla/index";

import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';

import Dashboard from './Dashboard';
import {GApp} from 'jazasoft';
import Resource from 'jazasoft/components/Resource';

import { Todo, TodoAdd } from './todo';

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

