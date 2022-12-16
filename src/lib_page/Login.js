import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
function Login(){
    const [user,setUser] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e)=>{
        const{name, value}=e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const handlesubmit=(e)=>{
            e.preventDefault(); 
            fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
              }).then((res) => {
                console.log("post data: ", user);
                console.log("users", res);
                alert("Login Successfully..")
              })
            }
            
    
return(
        <div id="login">
        <form className="bg- px-4 py-4" onSubmit={handlesubmit}>
        <p className="h2 text-white">Login Form</p>
        <div className="form-group">
            <label className="my-2">Enter the Email</label>
            <input className="form-control" name="email" value={user.email} required onChange={handleChange}></input>
        </div>
        <div className="form-group">
            <label className="my-2">Enter the passowrd</label>
            <input className="form-control" name="password"value={user.password} required onChange={handleChange}></input>
        </div>
        <div className='row text-center my-3 px-2'>
            <button className='col btn btn-dark mx-1'>Submit</button>
            <a className='col btn btn-outline-light mx-1' href="User.js" role="button">Go To Portal</a><br/><br/>
            <a href="Register.js" > An New Account</a>
        </div>
     </form>
        
   </div>
    )
}
export default Login;
