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
import Search from "./lib_page/Search";
import Adminsearch from "./lib_page/Adminsearch";
import Update from "./lib_page/Update";
import Delete from "./lib_page/Delete";
import Place_order from "./lib_page/place_order";
import Newupdate from "./lib_page/Newupdate";


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element = {<Home/>}/>
        <Route path="/Register" element = {<Register/>}/>
        <Route path="/Login" element ={<Login/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/admin_Login" element={<Admin_Login/>}/>
        <Route path="/Admin_dash" element={<Admin_dash/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/Adminsearch" element={<Adminsearch/>}/>
        <Route path="/Update" element={<Update/>}/>
        <Route path="/Delete" element={<Delete/>}/>
        <Route path="/place_order" element={<Place_order/>}/>
        <Route path="/Newupdate" element={<Newupdate/>}/>
        
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
