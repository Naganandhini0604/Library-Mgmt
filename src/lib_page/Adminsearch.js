import React, { useState ,useEffect} from "react";

const Adminsearch=()=>{
  const [books,setBooks]=useState([]);
  const [quary,setQuary]=useState("");
  const booktable=async()=>{
    let result=await fetch('http://localhost:5000/getbooks');
    result= await result.json();
    setBooks(result);
  }
   useEffect(()=>{
     booktable();
  },[]);
 
  // const handlesubmit=(e)=>{
  //   e.preventDefault();
console.log("name:",books)

//   }
 return(
    <div>
       <div className="topnav">
      <h2 id="head">Admin Portal</h2>
      </div>
        <div className="sidebar">
        <a href="Home.js"><i className="fa fa-fw fa-home" id="navtag"></i> Home</a>
        <a href="Admin_dash.js"><i className="fa fa-fw fa-wrench" id="navtag"></i> Add Books</a>
        <a href="Adminsearch.js"><i className="fa fa-fw fa-envelope" id="navtag"></i> Book Search</a>
        <a href="Update.js"><i className="fa fa-fw fa-user" id="navtag"></i> Book Update</a>
        <a href="Delete.js"><i className="fa fa-fw fa-envelope" id="navtag"></i> Delete</a>
        <a href="#contact"><i className="fa fa-fw fa-envelope" id="navtag"></i> View Order</a>
        <a href="#contact"><i className="fa fa-fw fa-envelope" id="navtag"></i> Log Out</a>
      </div>
      <div className="form-group" id="search">
      <form className="d-flex" onSubmit={booktable}>
            {/* <h4>Search Books</h4><br/> */}
              <input className="form-control me-3 p-2" type="text" placeholder="Search Books" onChange={(e)=>setQuary(e.target.value)}/>
              <button className="col btn btn-dark mx-1 " id="sbtn" type="button"  >Search</button>
            </form>
          </div>
          <div id="table">
      <table className="table table-bordered"  >
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
      {books.filter((books)=>
       books.title.toLowerCase().includes(quary) || 
       books.id.toLowerCase().includes(quary) ||
       books.author_name.toLowerCase().includes(quary)
      ).map((item)=>(
           <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.author_name}</td>
            <td>{item.cost}</td>
            <td>{item.book_quantity}</td>
           </tr>
         ))
      }      
    </tbody>
    </table>
         </div>
      </div>
      )
}
export default Adminsearch;