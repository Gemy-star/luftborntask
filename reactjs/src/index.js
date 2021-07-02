import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import {LocalizationProvider} from "./context/LocalizationContext";
import {BrowserRouter} from "react-router-dom";
import {ProductsProvider} from "./context/ProductsContext";
import {UserProvider} from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ProductsProvider>
          <LocalizationProvider>
              <UserProvider>
                  <App />
              </UserProvider>
          </LocalizationProvider>
          </ProductsProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
