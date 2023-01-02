import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
// import { Modal } from "bootstrap";

const Update = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [quary, setQuary] = useState("");
  const booktable = async () => {
    let result = await fetch("http://localhost:5000/getbooks");
    result = await result.json();
    setBooks(result);
  };
  useEffect((e) => {
    booktable();
    //getapi();
     //handlechange();
  }, []);
  //console.log("name:",books);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author_name, setAuthor_name] = useState("");
  const [category,setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [book_quantity, setBook_quantity] = useState("");

  // const dataupdate=async(_id)=>{
  //   const books={id,title,author_name,cost,book_quantity}
  //    console.log("update id :",_id)
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
  //

  //  const [lastdata, setFromdata] = useState([]);
  // const handlechange = async (e) => {
  //   console.log("row data :", e);
  //   let lastdata = await fetch(`http://localhost:5000/getOne/${e}`);
  //   lastdata = await lastdata.json();
  //   setFromdata([lastdata]);
  //   console.log("Lastdata1: ", lastdata);
  //   console.log("first data:",setFromdata)


    // setId(lastdata.id);
    // setTitle(lastdata.title);
    // setAuthor_name(lastdata.author_name);
    // setCategory(lastdata.category);
    // setCost(lastdata.cost);
    // setBook_quantity(lastdata.book_quantity);
    // console.log("Formdata: ", await getData);
    // .then((res)=>{if(res.status === 200){alert("get id..")}else{console.log("books",books)}})
    // .catch(err => console.log(err));
 // };
console.log("id",books);
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const book = { id, title, author_name,category, cost, book_quantity };
    fetch("http://localhost:5000/addbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    }).then((res) => { 
      console.log("post data: ", book);
      console.log("books", res);
      //alert("Books are added successfully..!");
     
      navigate(window.location.reload());
    });
  };
  const logout=()=>{
    localStorage.clear();
    window.location.href='/Home';
  }
  return (
    <div>
      <div className="topnav">
        <h2 id="head">Admin Portal</h2>
      </div>
      <div className="sidebar">
        <a href="Home">
          <i className="fa fa-fw fa-home" id="navtag"></i> Home
        </a>
        <a href="Admin_dash">
          <i className="fa fa-fw fa-wrench" id="navtag"></i> Add Books
        </a>
        <a href="Adminsearch">
          <i className="fa fa-fw fa-envelope" id="navtag"></i> Book Search
        </a>
        <a href="Update">
          <i className="fa fa-fw fa-user" id="navtag"></i> Book Update
        </a>
        <a href="Delete">
          <i className="fa fa-fw fa-envelope" id="navtag"></i> Delete
        </a>
        <a href="#contact">
          <i className="fa fa-fw fa-envelope" id="navtag"></i> View Order
        </a>
        <a href="/Home" onClick={logout}>
          <i className="fa fa-fw fa-envelope" id="navtag" ></i> Log Out
        </a>
      </div>
      <div className="backtable">
        <div className="form-group" id="search">
          <form className="d-flex" onSubmit={booktable}>
            {/* <h4>Search Books</h4><br/> */}
            <input
              className="form-control me-3 p-2"
              type="text"
              placeholder="Book Search by Id"
              onChange={(e) => setQuary(e.target.value)}
            />
            {/* <button className="col btn btn-dark mx-1 " id="sbtn" type="button">
              Search
            </button> */}
          </form>
        </div>
        <div id="update_table">
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
              {books
                // .filter((books) => books.id.toLowerCase().includes(quary))
                .map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td >{item.title}</td>
                    <td>{item.author_name}</td>
                    <td>{item.category}</td>
                    <td>{item.cost}</td>
                    <td>{item.book_quantity}</td>
                    <td>
                      <button
                        className="col btn btn-dark mx-1"
                        
                        type="button"
                        onClick={() => {
                          // setIsOpen(true);
                          //getapi();
                         // handlechange(item._id);
                          alert("do you want to update..")
                          // navigate("/Admin_dash")
                          console.log("books of", books);
                          setIsOpen(true);
                        }}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {IsOpen && (
        // -----------------------------------------------------------------------
        
        
        <div
          className="a"
          id="a"
          // aria-labelledby="exampleModalLabel"
          // aria-hidden="true"
        >
          <br />

          <h3>
            Update Books
            <button
              type="button"
              className="btn-close "
              onClick={() => setIsOpen(false)}
            ></button>
          </h3>
          <div>
          {/* <form className="bg- px-4 py-4"  > */}
            {/* {getData.data.map((items,_id) => ( */}
             {books.map((item,_id)=>( 
              <form className="bg- px-4 py-4"  >
              <div className="map" key={_id}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="number"
                   defaultValue={item.id} 
                    required
                    onChange={(e) => {setId(e.target.value)}}
                    placeholder="Book Id"
                  ></input>
                  <br />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={item.title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Book Title"
                  ></input>
                  <br />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                  defaultValue={item.author_name}
                    required
                    onChange={(e) => setAuthor_name(e.target.value)}
                    placeholder="Author Name"
                  ></input>
                  <br />
                </div>
                <div className="form-group" >
            <select className="form-control" id="category" value={category} required onChange={(e)=>setCategory(e.target.value)} placeholder="Category">
            <option selected hidden > Category</option>
            <option value="Theory">Theory</option>
            <option value="Story">Story</option>
            <option value="Comics">Comics</option>
            <option value="Fantacy">Fantacy</option>
              </select><br/>
        
        </div>
                <div className="form-group">
                  <input
                    className="form-control"
                   defaultValue={item.cost}
                    required
                    onChange={(e) => setCost(e.target.value)}
                    placeholder="Book Cost"
                  ></input>
                  <br />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="number"
                   defaultValue={item.book_quantity}
                    required
                    onChange={(e) => setBook_quantity(e.target.value)}
                    placeholder="Book Qantity"
                  ></input>
                </div>

                <div className="row text-center my-3 px-2">
                  <button
                    className="col btn btn-dark mx-1"
                    // type="submit"
                    // onClick={(e) => {
                      // e.preventDefault()
                       //alert("Books are updated successfully..!");
                       //
                        
                       //navigate(window.location.reload());
                     
                    // }}
                    onClick={handlesubmit}
                  >
                    Update
                  </button>
                </div>
              </div>
              </form>
           ) )}  
           </div>
        </div>
       
        // ) )} 
      )} 
    </div>
  );
};
export default Update;
