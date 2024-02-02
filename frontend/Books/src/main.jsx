import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from "./store.js"
import {Provider} from "react-redux"
import { AppProvider } from './context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
  <Provider store={store}>
    

    <App />

  </Provider>
  </AppProvider>
)
