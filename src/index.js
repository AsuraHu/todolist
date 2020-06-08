import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from './store/index';

import './reset.css';
import 'antd/dist/antd.css';
import './todolist.css';


ReactDOM.render(
  <PersistGate loading={null} persistor={persistor}><TodoList /></PersistGate>,
  document.getElementById('root')
);
