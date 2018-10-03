import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ecomm } from './Redux/reducers';
import App from "./App.js";


const store = createStore(ecomm);

ReactDOM.render(
     (<Provider store={store}>
     <BrowserRouter>
       <App />
     </BrowserRouter>
     </Provider>)
    , document.getElementById("root"));