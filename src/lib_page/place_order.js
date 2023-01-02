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
      //log out
      const logout=()=>{
        localStorage.clear();
        window.location.href='/Home';
      }

    //open the form
      const [IsformOpen,setIsformOpen] = useState(false);
      const [quary,setQuary]=useState("");
      const [orderdata,setOrderdata]=useState([])
      const getid=async(_id)=>{
        try{
        console.log("id:",_id)
        let orderdata=await fetch(`http://localhost:5000/getOne/${_id}`);
        // {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        orderdata=await orderdata.json();
        setOrderdata(orderdata);
        console.log("data:",orderdata)
        console.log("f dara:",setOrderdata);
        }catch(err){ console.log(err)};
        // .then(console.log("updated"))
        // .catch(err => console.log(err));
      }
      const [title,setTitle]=useState("");
        const [author_name,setAuthor_name]=useState("");
      const handlechange=(e)=>{
        e.preventDefault();
        const books = {  title, author_name,};
        fetch("http://localhost:5000/addbook", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(books),
        }).then((res) => {
          console.log("post data: ", books);
          console.log("books", res);
          alert("Books are added successfully..!");
        });
      }
      const currDate = new Date().toLocaleDateString();
      const futuredate = new Date(+2).toLocaleDateString(5);
  return(
          <div>
            <div className="topnav">
          <h2 id="head">User Portal</h2>
          </div>
            <div className="sidebar">
            <a href="Home"><i className="fa fa-fw fa-home" id="navtag"></i> Home</a>
            <a href="User"><i className="fa fa-fw fa-envelope" id="navtag"></i>User Portal</a>
            <a href="Search"><i className="fa fa-fw fa-wrench" id="navtag"></i> Book Search</a>
            <a href="#contact"><i className="fa fa-fw fa-envelope" id="navtag"></i> Book Details</a>
            <a href="#contact" onClick={logout}><i className="fa fa-fw fa-envelope" id="navtag"></i> Log Out</a>
          </div>
          <div className="form-group" id="search">
      {/* <form className="d-flex">
            {/* <h4>Search Books</h4><br/> */}
              {/* <input className="form-control me-3 p-2" type="text" placeholder="Search Books" onChange={(e)=>setQuary(e.target.value)}/>
              {/* <button className="col btn btn-dark mx-1 " id="sbtn" type="button">Search</button> */}
            {/* </form>  */}
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
            books.map((item,_id)=>(
               <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author_name}</td>
                <td>{item.category}</td>
                <td>{item.cost}</td>
                <td>{item.book_quantity}</td>
                <td><button className="col btn btn-dark mx-1" type="button"   
                onClick={()=>{ 
                  var result=window.confirm("Do you want to details of the book?..");
                  if(result){
                  setIsformOpen(true);
                  getid(item._id);
                  }
                  }}
                > Details
          </button></td>
               </tr>
            ))
          }
        </tbody>
        </table>
             </div>
             {IsformOpen &&(
             <div id="order" onChange={handlechange}>
               
                  <div>
                    <p ><h5>Books Details</h5></p>
                <p className="text-white"  onChange={(e) => setTitle(e.target.value)}>{orderdata.title}</p>
                <p className="text-white" onChange={(e) => setAuthor_name(e.target.value)}>{orderdata.author_name}</p>
                 <p>Today Date :{currDate}</p>
                 <p>Return Date :{futuredate}</p>
                 </div>
                
              <button id="ordbutton" className="col btn btn-dark mx-1" 
             onClick={()=>setIsformOpen(false)} type="button" >close</button>
             </div>
             )} 
             
   </div>
        );
  
}
export default Place_order;