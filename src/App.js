import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Provider from './context/Provider';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Provider>
          <Route path="/foods" component={ Foods } />
          <Route exact path="/" component={ Login } />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
