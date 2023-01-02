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
 
  const [story,setStory]=useState("");
const filter = async()=>{
  let results = await fetch('http://localhost:5000/filter_story');
     results = await results.json();
     setStory(results);
     console.log("resulys:",results)

    }
    

  
console.log("name:",books)
const logout=()=>{
  localStorage.clear();
  window.location.href='/Home';
}

 return(
    <div>
       <div className="topnav">
       <div className="form-group"  >
            <select className="form-control" id="books" onSubmit={booktable}  placeholder="Category">
            <option selected hidden > Category</option>
            <option value="Theory">Theory</option>
            <option value="story" onChange={filter} >Story</option>
            <option value="Comics">Comics</option>
            <option value="Fantacy">Fantacy</option>
              </select><br/>
        
        </div>
      <h2 id="heads" className="super">Admin Portal</h2>
      </div>
        <div className="sidebar">
        <a href="Home"><i className="fa fa-fw fa-home" id="navtag"></i> Home</a>
        <a href="Admin_dash"><i className="fa fa-fw fa-wrench" id="navtag"></i> Add Books</a>
        <a href="Adminsearch"><i className="fa fa-fw fa-envelope" id="navtag"></i> Book Search</a>
        <a href="Newupdate"><i className="fa fa-fw fa-user" id="navtag"></i> Book Update</a>
        <a href="Delete"><i className="fa fa-fw fa-envelope" id="navtag"></i> Delete</a>
        <a href="#contact"><i className="fa fa-fw fa-envelope" id="navtag"></i> View Order</a>
        <a href="#contact" onClick={logout}><i className="fa fa-fw fa-envelope" id="navtag"></i> Log Out</a>
      </div>
      <div className="form-group" id="search">
      <form className="d-flex" onSubmit={booktable}>
            {/* <h4>Search Books</h4><br/> */}
              <input className="form-control me-3 p-2" type="text" placeholder="Search Books by id" onChange={(e)=>setQuary(e.target.value)}></input>
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
        <th>Category</th>
        <th>Cost</th>
        <th>Book Qantity</th>
      </tr>
    </thead>
    <tbody>
      {books.filter((story)=>
      //  books.title.toLowerCase().includes(quary) || 
      //  books.id.toLowerCase().includes(quary) ||
       story.category.toLowerCase().includes(quary)
      ).map((item)=>(
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
      )
}
export default Adminsearch;