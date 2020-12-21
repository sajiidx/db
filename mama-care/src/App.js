import './App.css';
import Login from './Login';
import React, { useEffect } from 'react'
import {Provider} from 'react-redux'
import Dashboard from './Dashboard'
import store from './store'
import Register from './Register'
import Admin from './Admin'
import Cart from './Cart'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { setToken } from './setToken';
import { loadUser } from './action/auth';

if(localStorage.getItem('token')){
  setToken(localStorage.getItem('token'))
}

function App() {

  useEffect( () => {
    store.dispatch(loadUser())
  },[])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
