import React from 'react';
import './App.css';
import LoginPage from './pages/login/loginPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AdminPanel } from './pages/admin';
function App() {
  return (
   

    <Router>
       <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/admin">
            <AdminPanel/>
          </Route>
          <Route path="/">
            <AdminPanel/>
          </Route>
        </Switch>
    </Router>
  
  );
}

export default App;
