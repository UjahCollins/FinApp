import './App.css';
import Login from "../src/component/Login/Login"
import Signup from './component/signup/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivatePage from './component/privatePage/PrivatePage';
import Dashboard from './component/dashboard/Dashboard';
import SignupTwo from './component/signup/SignupTwo';
// import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element = {<Login/>} path='/'/>
        <Route element = {<SignupTwo/>} path='/signuptwo' />
        <Route element={<Signup/>} path='/signup'/>
        <Route element = {<PrivatePage/>}>
          <Route element={<Dashboard/>} path='/dashboard'/>
          </Route>
      </Routes>
      </BrowserRouter>
      {/* <Dashboard/>
      <Signup/>
      <Login/> */}
    </div>
  );
}

export default App;
