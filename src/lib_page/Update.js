import React, { useState ,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { Modal } from "bootstrap";

const Update=()=>{
  const [IsOpen,setIsOpen] = useState(false);
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
console.log("name:",books);

const[id, setId]=useState("");
const[title, setTitle]=useState("");
const[author_name, setAuthor_name]=useState("");
const[cost, setCost]=useState("");
const[book_quantity, setBook_quantity]=useState("");

// const dataupdate=async(_id)=>{
//   const books={id,title,author_name,cost,book_quantity}
 
//   fetch(`http://localhost:5000/update/${_id}`,
//   {
//      ...books,
//     _id:books._id
//   })
//   .then((res)=>{if(res.status === 200){alert("updated sucessfully..")}else{console.log(books)}})
//   .catch(err => console.log(err));
// }
// useEffect=(()=>{
  
// },[])



const handlesubmit=(e,_id)=>{
  e.preventDefault(); 
       //const books={id,title,author_name,cost,book_quantity}
        fetch("http://localhost:5000/addbook", {...books,_id:books._id},{
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
        <a href="Admin_dash.js"><i className="fa fa-fw fa-wrench" id="navtag"></i> Add Books</a>
        <a href="Adminsearch.js"><i className="fa fa-fw fa-envelope" id="navtag"></i> Book Search</a>
        <a href="Update.js"><i className="fa fa-fw fa-user" id="navtag"></i> Book Update</a>
        <a href="Delete.js"><i className="fa fa-fw fa-envelope" id="navtag"></i> Delete</a>
        <a href="#contact"><i className="fa fa-fw fa-envelope" id="navtag"></i> View Order</a>
        <a href="#contact"><i className="fa fa-fw fa-envelope" id="navtag"></i> Log Out</a>
      </div>
      <div className="backtable">
      <div className="form-group" id="search">
      <form className="d-flex" onSubmit={booktable} >
            {/* <h4>Search Books</h4><br/> */}
              <input className="form-control me-3 p-2" type="text" placeholder="Search Books" onChange={(e)=>setQuary(e.target.value)}/>
              <button className="col btn btn-dark mx-1 " id="sbtn" type="button" >Search</button>
            </form>
          </div>
          <div id="update_table">
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
       books.id.toLowerCase().includes(quary)       
      ).map((item)=>(
           <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.author_name}</td>
            <td>{item.cost}</td>
            <td>{item.book_quantity}</td>
            <td><button className="col btn btn-dark mx-1" type="button" onClick={()=>setIsOpen(true)}  >
            Update
          </button></td>
           </tr>
         ))
      }      
    </tbody>
    </table>
         </div>
         </div>
         {IsOpen &&(
          
          // -----------------------------------------------------------------------
         <div className="a" id="a" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><br/>
               <h3 >Update Books<button type="button" className="btn-close " onClick={()=>setIsOpen(false)}></button></h3>
         <form className="bg- px-4 py-4" onSubmit={handlesubmit} >
       
        <div className="form-group">
            <input className="form-control" type="number" value={books.id} required onChange={(e)=>setId(e.target.value)} placeholder="Book Id"></input><br/>
        </div>
        <div className="form-group">
            <input className="form-control" value={title} required onChange={(e)=>setTitle(e.target.value)} placeholder="Book Title"></input><br/>
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
            <button className='col btn btn-dark mx-1' type="submit" >Update</button>
        </div>
     </form>
      </div>
      )}
      </div>
      )
}
export default Update;