import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Admin_Login(){
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

    const handlesubmit=(e)=>{
        e.preventDefault(); 
        const user={email,password}
        fetch("http://localhost:5000/admin_login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => {
            console.log("post data: ",user);
            console.log("users", res);
            alert("Login Successfully..")
          })
        }
        const navigate=useNavigate();
        const submit=()=>{
          navigate("/Admin_dash")
        }

    return(
        <div id="login">
        <form className="bg- px-4 py-4" onSubmit={handlesubmit}>
        <p className="h2 text-white">Admin Login Form</p>
        <div className="form-group">
            <label className="my-2">Enter the Email</label>
            <input className="form-control" name="email" value={email} required onChange={(e)=>setEmail(e.target.value)} ></input>
        </div>
        <div className="form-group">
            <label className="my-2">Enter the passowrd</label>
            <input className="form-control" type="password" name="password" value={password} required onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <div className='row text-center my-3 px-2'>
            <button className='col btn btn-dark mx-1'onClick={submit}>Submit</button>
            {/* <a className='col btn btn-outline-light mx-1'  role="button" href="Admin_dash">Go To Portal</a><br/><br/> */}
            {/* <a href="Register.js" > An New Account</a> */}
        </div>
     </form>
        
   </div>
    )
}
export default Admin_Login;