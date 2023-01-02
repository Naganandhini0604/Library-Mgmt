// import "bootstrap/dist/css/bootstrap.css";
// import React, { useState } from "react";

import { useState ,useEffect} from "react";

function User() {
  const [books,setBooks]=useState([]);
  const booktable=async()=>{
    let result=await fetch('http://localhost:5000/getbooks');
    result= await result.json();
    setBooks(result);
  }
  console.log(books);

  // const booktable=async()=>{
  // // e.preventDefault();
  //  fetch("http://localhost:5000/getbooks", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(books),
  // }).then((res) => {
  //   console.log(json => setBooks(json));
  //  // console.log("post data: ",books);
  //   console.log("books", res);
  //   //alert("Books are added successfully..!")
  // })
  // }
  useEffect(()=>{
    booktable();
  },[]);

  const logout=()=>{
    localStorage.clear();
    window.location.href='/Home';
  }
    return(
      <div>
        <div className="topnav">
      <h2 id="head">User Portal</h2>
      </div>
        <div className="sidebar">
        <a href="Home"><i className="fa fa-fw fa-home" id="navtag"></i> Home</a>
        <a href="User"><i className="fa fa-fw fa-envelope" id="navtag"></i>User Portal</a>
        <a href="Search"><i className="fa fa-fw fa-wrench" id="navtag"></i> Book Search</a>
        <a href="/place_order"><i className="fa fa-fw fa-envelope" id="navtag"></i> Book Details</a>
        <a href="#contact" onClick={logout}><i className="fa fa-fw fa-envelope" id="navtag"></i> Log Out</a>
      </div>
      <div id="table">
      <table className="table table-bordered">
    <thead>
      <tr>
        <th>Book Id</th>
        <th>Title</th>
        <th>Author Name</th>
        <th>Categories</th>
        <th>Cost</th>
        <th>Book Qantity</th>
      </tr>
    </thead>
    <tbody>
      {
        books.map((item)=>(
           <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.author_name}</td>
            <td>{item.category}</td>
            <td>{item.cost}</td>
            <td>{item.book_quantity}</td>
           </tr>
        ))
      }
    </tbody>
    </table>
         </div>
         </div>
    );
}
export default User;