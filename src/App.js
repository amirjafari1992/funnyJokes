import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from './components/mainPage';
import { Provider } from "react-redux";
import store from './store';

import './scss/CSSReset.scss'
import 'bootstrap/dist/css/bootstrap.css';
import './scss/public.scss'



function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainPage />
      </Router>
    </Provider>
  );
}

export default App;
