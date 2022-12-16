//import logo from './logo.svg';
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./lib_page/Register";
import Login from "./lib_page/Login";
import Home from "./lib_page/Home";
import User from "./lib_page/User";
import Admin_Login from "./lib_page/Admin_Login";
import './App.css';
import Admin_dash from "./Admin_dash";

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/Home.js" element = {<Home/>}/>
        <Route path="/Register.js" element = {<Register/>}/>
        <Route path="/Login.js" element ={<Login/>}/>
        <Route path="/User.js" element={<User/>}/>
        <Route path="/Admin_Login.js" element={<Admin_Login/>}/>
        <Route path="/Admin_dash.js" element={<Admin_dash/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
