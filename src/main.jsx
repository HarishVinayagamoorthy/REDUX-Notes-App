import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Redux/Store.jsx'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <Provider store={store}>
    <App />
    <ToastContainer
    autoClose={1000}/>
    </Provider>
  
  </React.StrictMode>,
)
