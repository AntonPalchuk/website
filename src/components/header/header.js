import React, { Component } from 'react';

class Header extends Component {
  constructor(){
    super();
  }

    render(){
      return (
        <nav>
          <div className="nav-wrapper header">
            <a className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li onClick={() => {this.props.changePage("userList")}}><a>Home</a></li>
              <li onClick={() => {this.props.changePage("listSearch")}}><a>Search</a></li>
              <li onClick={() => {this.props.changePage("editUserList")}}><a>Edit List</a></li>
              <li onClick={() => {this.props.changePage("login")}}><a>Exit</a></li>
            </ul>
          </div>
        </nav>
      )
    }
  }


export default Header;
