import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./redux/store";
import {Provider} from "react-redux";

const store = setupStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

