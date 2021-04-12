import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { SnackbarProvider } from 'notistack';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider 
     maxSnack={1} preventDuplicate  > 
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// render(<SnackbarProvider 
//   maxSnack={1} preventDuplicate  ><App /></SnackbarProvider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

