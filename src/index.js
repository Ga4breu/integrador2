import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserRouter,RouterProvider, Route } from "react-router-dom";
import CurtoCircuito from './components/CurtoCircuito.jsx';
import Estabilidade from './components/Estabilidade.jsx';
import Reguladores from './components/Reguladores.jsx';
import Carga from './components/carga.jsx';
import Inercia from './components/inercia.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "curtocircuito",
    element: <CurtoCircuito/>
  },
  {
    path: "estabilidade",
    element: <Estabilidade/>
  },
  {
    path: "carga",
    element: <Carga/>
  },
  {
    path: "inercia",
    element: <Inercia/>
  },
  {
    path: "reguladores",
    element: <Reguladores/>
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
