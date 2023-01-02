import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [password,setPassword]=useState("");
  const [cpassword,setCpassword]=useState("");
  
  const handlesubmit = (e) => {
    e.preventDefault();
    const user = {name,email,mobile,password,cpassword};
    if(user.password !== user.cpassword){
      console.log("password dose not match");
      alert("password does not match!");
     // return;
    }    else {
    fetch("http://localhost:5000/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      console.log("post data: ", user);
      console.log("users", res);
      localStorage.setItem("user",JSON.stringify(user));
      alert("Registered successfully..")
      navigate("/Login");
    });
    // }catch(err){
    //   console.error(err.response);
    // }
  }
}

const navigate=useNavigate();
        // const submit=()=>{
        //   navigate("/Login");
          
        // }

  return (
    <div id="page">
      {/* //{console.log("user",user)} */}
      <form className="bg-primary px-4 py-4" onSubmit={handlesubmit}>
        <p className="h2 text-white">Registration Form</p>
        <div className="form-group">
          <label className="my-2">Enter the user name</label>
          <input
            className="form-control"
            name="name"
            value={name} 
            required 
            onChange={(e)=>setName(e.target.value)}
          ></input>
        </div>
        <div className="form-group" controlid="formBasicEmail">
          <label className="my-2">Enter the email</label>
          <input
            className="form-control"
            name="email"
            value={email} 
            required 
            onChange={(e)=>setEmail(e.target.value)}
            type ="email"
          ></input>
        </div>
        <div className="form-group">
          <label className="my-2">Enter the phone number</label>
          <input
            className="form-control"
            name="mobile"
            value={mobile}
            required
            onChange={(e)=>setMobile(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label className="my-2">Enter the passowrd</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={password}
            required
            onChange={(e)=>setPassword(e.target.value)}
            minLength='6'
          ></input>
        </div>
        <div className="form-group">
          <label className="my-2">Enter the confirm passowrd</label>
          <input
            className="form-control"
            type="password"
            name="cpassword"
            value={cpassword}
            required
            onChange={(e)=>setCpassword(e.target.value)}
            minLength='6'
          ></input>
        </div>
        <div className="row text-center my-3 px-2">
          <button className="col btn btn-dark mx-1" type="submit" >
            Submit
          </button>
          <a
            className="col btn btn-outline-light mx-1"
            href="login"
            role="button"
          >
            {/* {" "} */}
            Go Login
          </a>
        </div>
      </form>
    </div>
  );
}
export default Register;
