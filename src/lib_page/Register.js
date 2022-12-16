import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

function Register() {
  // const {name,useName}=useState("");
  // const {email,useEmail}=useState("");
  // const {mobile,useMobile}=useState("");
  // const {password,usePassword}=useState("");
  // const {cpassword,useCpassword}=useState("");

  // const handlesubmit=(e)=>{
  //    e.preventDefault();
  //    console.log(name);
  // }
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target)
    setUser({
      ...user,
      [name]: value,
    });
    
    //console.log(name,value)
  };
  
  const handlesubmit = (e) => {
    e.preventDefault();
    // const { name, email, mobile, password, cpassword } = user;
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
    });
    // }catch(err){
    //   console.error(err.response);
    // }
  }
}


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
            value={user.name}
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group" controlid="formBasicEmail">
          <label className="my-2">Enter the email</label>
          <input
            className="form-control"
            name="email"
            value={user.email}
            required
            onChange={handleChange}
            type ="email"
          ></input>
        </div>
        <div className="form-group">
          <label className="my-2">Enter the phone number</label>
          <input
            className="form-control"
            name="mobile"
            value={user.mobile}
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label className="my-2">Enter the passowrd</label>
          <input
            className="form-control"
            name="password"
            value={user.password}
            required
            onChange={handleChange}
            minLength='6'
          ></input>
        </div>
        <div className="form-group">
          <label className="my-2">Enter the confirm passowrd</label>
          <input
            className="form-control"
            name="cpassword"
            value={user.cpassword}
            required
            onChange={handleChange}
            minLength='6'
          ></input>
        </div>
        <div className="row text-center my-3 px-2">
          <button className="col btn btn-dark mx-1" type="submit">
            Submit
          </button>
          <a
            className="col btn btn-outline-light mx-1"
            href="login.js"
            role="button"
          >
            {" "}
            Go Login
          </a>
        </div>
      </form>
    </div>
  );
}
export default Register;
