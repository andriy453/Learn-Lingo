import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import './index.css';
import './Firebase.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter basename="/Learn-Lingo/">
    <Provider store={store}>
      
       
      <App />
         </Provider>
    </BrowserRouter>
  ,
);
