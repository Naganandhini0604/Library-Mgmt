import "bootstrap/dist/css/bootstrap.css";
import React, { useState,useEffect } from "react";
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

function Place_order() {
    const [books,setBooks]=useState([]);
    const booktable=async()=>{
      let result=await fetch('http://localhost:5000/getbooks');
      result= await result.json();
      setBooks(result);
    }
    console.log(books);
    useEffect(()=>{
        booktable();
      },[]);
    
      const [IsOpen,setIsOpen] = useState(false);
  return(
          <div>
            <div className="topnav">
          <h2 id="head">User Portal</h2>
          </div>
            <div className="sidebar">
            <a href="Home.js"><i className="fa fa-fw fa-home" id="navtag"></i> Home</a>
            <a href="Search.js"><i className="fa fa-fw fa-wrench" id="navtag"></i> Book Search</a>
            <a href="#contact"><i className="fa fa-fw fa-envelope" id="navtag"></i> View Date Info</a>
            <a href="#clients"><i className="fa fa-fw fa-user" id="navtag"></i> Return Book</a>
            <a href="#contact"><i className="fa fa-fw fa-envelope" id="navtag"></i> Place Order</a>
            <a href="#contact"><i className="fa fa-fw fa-envelope" id="navtag"></i> Log Out</a>
          </div>
          <div id="table">
          <table className="table table-bordered">
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Author Name</th>
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
                <td>{item.cost}</td>
                <td>{item.book_quantity}</td>
                <td><button className="col btn btn-dark mx-1" type="button"   
                onClick={()=>{ setIsOpen(true)
                  var result=window.confirm("Do you want to order the book?..");
                  }}
                > Order
          </button></td>
               </tr>
            ))
          }
        </tbody>
        </table>
             </div>
             <div id="hi">
             <button className="col btn btn-dark mx-1" type="button" ></button>
             </div>
             
   </div>
        );
  
}
export default Place_order;