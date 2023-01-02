//import { addListener } from "nodemon";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [books, setBooks] = useState([]);
  const booktable = async () => {
    let result = await fetch("http://localhost:5000/getbooks");
    result = await result.json();
    setBooks(result);
  };
  useEffect(() => {
    booktable();
  }, []);

  const [quary, setQuary] = useState("");

  let [orderdata, setOrderdata] = useState([]);
  const getid = async (_id) => {
    try {
      console.log("id:", _id);
      //   fetch(`http://localhost:5000/getOne/${_id}`,
      //   {
      //     method: 'GET',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     }
      // })
      // .then(console.log("getdata"))
      let orderdata = await fetch(`http://localhost:5000/getOne/${_id}`);
      orderdata = await orderdata.json();
      setOrderdata(orderdata);
      const fox = orderdata.book_quantity - 1;
      console.log("data:", fox);
      const decre = (fox) => {};

      console.log("last data :", orderdata);
    } catch (err) {
      console.log(err);
    }
  };

  // const [quantity,setQuantity]=useState([])
  //const [count,setCount]=useState();

  const increment = (_id) => {
    console.log("id :", _id);
    const orderbook = orderdata.book_quantity - 1;
    //setCount(orderdata.book_quantity-1)
    // setCount(orderdata.map((item,index)=>item.book_quantity === key=?
    // {...item,orderdata: item.book_quantity-1} : item))
    console.log("orderbook : ", orderbook);
    // const dataupdate=async(_id)=>{
    //     const data=orderbook
    //      console.log("update id :",_id)
    //     fetch(`http://localhost:5000/update/${_id}`,
    //     {
    //        ...data,
    //       _id:data._id
    //     })
    //     .then((res)=>{if(res.status === 200){alert("updated sucessfully..")}else{console.log(data)}})
    //     .catch(err => console.log(err));
    //   }

    fetch("http://localhost:5000/addbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then((res) => {
      console.log("post data: ", orderdata);
      console.log("books", res);
      //alert("Books are added successfully..!")
    });
  };
  const logout = () => {
    localStorage.clear();
    window.location.href = "/Home";
  };

  const orderBook = async (e, item) => {
    e.preventDefault();
    console.log("Book data: ", item);
    const data = {
      title: item.title,
      id: item.id,
      author_name: item.author_name,
      cost: item.cost,
      category: item.category,
      book_quantity: item.book_quantity,
    };

    console.log("item.book_quantity: ", item.book_quantity);
    if (item.book_quantity !== 0) {
      if (window.confirm("You want to order book")) {
        console.log("Confirm");
        console.log("data: ", data);
        await fetch("http://localhost:5000/placeorder", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log("RESPONSE: ", res);
          });
      }
    } else {
      alert("Book is not available");
    }
  };
  const navigate=useNavigate();
  //--------------------------------------------------
  const returnBook = async (e, item) => {
    e.preventDefault();
    console.log("Book data: ", item);
    const data = {
      title: item.title,
      id: item.id,
      author_name: item.author_name,
      cost: item.cost,
      category: item.category,
      book_quantity: item.book_quantity,
    };

    console.log("item.book_quantity: ", item.book_quantity);
   
      if (window.confirm("You want to order book")) {
        console.log("Confirm");
        console.log("data: ", data);
        await fetch("http://localhost:5000/returnorder", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log("RESPONSE: ", res);
          });
      }
  };

  return (
    <div>
      <div className="topnav">
        <div className="dropdown"></div>
        <h2 id="heads">User Portal</h2>
      </div>
      <div className="sidebar">
        <a href="Home">
          <i className="fa fa-fw fa-home" id="navtag"></i> Home
        </a>
        <a href="User">
          <i className="fa fa-fw fa-envelope" id="navtag"></i>User Portal
        </a>
        <a href="#services">
          <i className="fa fa-fw fa-wrench" id="navtag"></i> Book Search
        </a>
        <a href="/place_order">
          <i className="fa fa-fw fa-envelope" id="navtag"></i> Book Details
        </a>
        <a href="" onClick={logout}>
          <i className="fa fa-fw fa-envelope" id="navtag"></i> Log Out
        </a>
      </div>
      <div className="form-group" id="search">
        <form className="d-flex">
          {/* <h4>Search Books</h4><br/> */}
          <input
            className="form-control me-3 p-2"
            type="text"
            placeholder="Search Books"
            onChange={(e) => setQuary(e.target.value)}
          />
          {/* <button className="col btn btn-dark mx-1 " id="sbtn" type="button">Search</button> */}
        </form>
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
          <tbody onSubmit={increment}>
            {books
              .filter(
                (books) =>
                  books.title.toLowerCase().includes(quary) ||
                  books.id.toLowerCase().includes(quary) ||
                  books.category.toLowerCase().includes(quary)
              )
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.author_name}</td>
                  <td>{item.category}</td>
                  <td>{item.cost}</td>
                  <td>{item.book_quantity}</td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={(e) =>{ orderBook(e, item)
                        navigate(window.location.reload()); }}
                    >
                      {" "}
                      Order
                    </button>
                  </td>
                  <td>
                  <button
                      className="btn btn-dark"
                      onClick={(e) => {returnBook(e, item)
                        navigate(window.location.reload()); }}
                    >
                      {" "}
                      Order
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Search;
