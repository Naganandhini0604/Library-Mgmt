// import "bootstrap/dist/css/bootstrap.css";
// import React, { useState } from "react";

function User() {
    return(
      <div>
        <div className="topnav">
      <h2 id="head">User Portal</h2>
      </div>
        <div class="sidebar">
        <a href="Home.js"><i class="fa fa-fw fa-home" id="navtag"></i> Home</a>
        <a href="#services"><i class="fa fa-fw fa-wrench" id="navtag"></i> Book Search</a>
        <a href="#contact"><i class="fa fa-fw fa-envelope" id="navtag"></i> View Date Info</a>
        <a href="#clients"><i class="fa fa-fw fa-user" id="navtag"></i> Return Book</a>
        <a href="#contact"><i class="fa fa-fw fa-envelope" id="navtag"></i> Please Order</a>
        <a href="#contact"><i class="fa fa-fw fa-envelope" id="navtag"></i> Log Out</a>
      </div>
      <div id="table">
      <table class="table table-bordered">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    </table>
         </div>
      </div>
    );
}
export default User;