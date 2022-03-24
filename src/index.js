import React from 'react';
import ReactDOM from 'react-dom';
import './view/index.css';
import App from './view/App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './logic/store'

ReactDOM.render(
<BrowserRouter>
  <StoreContext >  
  <App />
  </StoreContext>
</BrowserRouter>,
  document.getElementById('root')
);
