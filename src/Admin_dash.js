import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

function Admin_dash() {

    const[id, setId]=useState("");
    const[title, setTltle]=useState("");
    const[author_name, setAuthor_name]=useState("");
    const[cost, setCost]=useState("");
    const[book_quantity, setBook_quantity]=useState("");

    const handlesubmit=(e)=>{
        e.preventDefault(); 
        const books={id,title,author_name,cost,book_quantity}
        fetch("http://localhost:5000/addbook", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(books),
          }).then((res) => {
            console.log("post data: ",books);
            console.log("books", res);
            alert("Books are added successfully..!")
          })
        }

    return(
      <div>
        <div className="topnav">
      <h2 id="head">Admin Portal</h2>
      </div>
        <div className="sidebar">
        <a href="Home.js"><i className="fa fa-fw fa-home" id="navtag"></i> Home</a>
        <a href=""><i className="fa fa-fw fa-wrench" id="navtag"></i> Add Books</a>
        <a href="Adminsearch.js"><i className="fa fa-fw fa-envelope" id="navtag"></i> Book Search</a>
        <a href="Update.js"><i className="fa fa-fw fa-user" id="navtag"></i> Book Update</a>
        <a href="Delete.js"><i className="fa fa-fw fa-envelope" id="navtag"></i> Delete</a>
        <a href="#contact"><i className="fa fa-fw fa-envelope" id="navtag"></i> View Order</a>
        <a href="#contact"><i className="fa fa-fw fa-envelope" id="navtag"></i> Log Out</a>
      </div>
      <div className="add"><br/>
               <h3>Add Books</h3>
         <form className="bg- px-4 py-4" onSubmit={handlesubmit} >
       
        <div className="form-group">
            <input className="form-control" type="number" value={id} required onChange={(e)=>setId(e.target.value)} placeholder="Book Id"></input><br/>
        </div>
        <div className="form-group">
            <input className="form-control" value={title} required onChange={(e)=>setTltle(e.target.value)} placeholder="Book Title"></input><br/>
        </div>
        <div className="form-group">
            <input className="form-control" value={author_name} required onChange={(e)=>setAuthor_name(e.target.value)} placeholder="Author Name"></input><br/>
        </div>
        <div className="form-group">
            <input className="form-control" value={cost} required onChange={(e)=>setCost(e.target.value)} placeholder="Book Cost"></input><br/>
        </div>
        <div className="form-group">
            <input className="form-control"  type="number" value={book_quantity} required onChange={(e)=>setBook_quantity(e.target.value)} placeholder="Book Qantity"></input>
        </div>

        <div className='row text-center my-3 px-2'>
            <button className='col btn btn-dark mx-1' type="submit" >Add</button>
        </div>
     </form>
      </div>

      </div>
    );
}
export default Admin_dash;