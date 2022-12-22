import "bootstrap/dist/css/bootstrap.css";
import React from "react";

function Home() {
  return (
    <div>
      <nav>
      {/* <body background="https://c1.wallpaperflare.com/preview/725/895/784/accessories-boy-fashion-gentleman.jpg"> */}
      <div className="menu">
        <ul id="list">
            <li>help</li>
            <span>&#9990;</span>
            <li id="hi">+7076376397</li>
            <ul className="li">
            <li><a href="Register.js">Register</a></li>
            <li><a href="Login.js">Login</a></li>
            <li>LogOut</li>
            </ul>
        </ul>
        
     </div>
     </nav>
     <div className="submenu">
        <ul>
            
            <li id="new">Library Management</li>
            <li id="SHOP"></li><br/>
            <li id="code">Nothing is pleasanter than exploring a library</li>
            
        </ul>
        <ul id="home">
            <li>HOME</li>
            {/* <li>MEN</li>
            <li>WOMEN</li>
            <li>MAILUS</li> */}
            <input className="form-control" placeholder="search"/>
            <li>list of books</li><br/>
            <li>Empty cart</li>
        </ul>
     
     </div>
     <div id="pic">
         <button >
          <a href="Admin_login.js">
          <img src="https://cdn3.f-cdn.com/contestentries/1733723/42113248/5e47d289f1335_thumb900.jpg"
          height="200px" width="200px" alt="" >
          </img></a>
          </button>
     </div>
     <div className="topic">
      <button>
        <a href="Register.js">
        <img src="https://e7.pngegg.com/pngimages/117/752/png-clipart-computer-icons-user-icon-design-numerous-miscellaneous-logo.png"
        height="200px" width="200px" alt=""></img>
         </a>
      </button>
     </div>
     </div>
    

    
     

  );
}

export default Home;
