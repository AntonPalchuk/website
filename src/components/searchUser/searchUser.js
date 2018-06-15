import React, { Component } from 'react';
import './searchUser.css';

class SearchUser extends Component {

  constructor(props){
    super();
  }


  render(){
    let user = this.props.value;
    return (
      <div>
        <div>
          <img src={user.img} className="img"/>
        </div>
        <div>
          <span>{user.first_name + " " + user.last_name}</span>
        </div>
      </div>
    )
  }

}
export default SearchUser;
