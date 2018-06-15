import React, { Component } from 'react';
import SearchUser from ".././searchUser/searchUser.js"
import Checkboxes from ".././checkboxes/checkboxes.js"
import './listSearch.css'

class ListSearch extends Component {

  constructor(){
    super();
    this.state = {
      input: "",
      isSearchShow: false,
      newArrUser: [],
      game: false,
      time: false,
      day: false
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.currentTarget.value
    })
  }

  handelSumbit = () => {
    let arrUser = JSON.parse(localStorage.getItem("userList")),
        newArrUser = arrUser.filter((user)=>{
          return user.first_name.toLowerCase().includes(this.state.input.toLowerCase())||user.last_name.toLowerCase().includes(this.state.input.toLowerCase())
        })
        if(this.state.game === true){
          this.searchGame()
        }
        if(this.state.time === true){
          this.searchTime()
        }
        if(this.state.day === true){
          this.searchDay()
        }
        this.setState({
          isSearchShow: true,
          newArrUser: newArrUser
        })
  }

  searchDay = () => {
    console.log("1");
  }

  searchGame = () => {
    console.log("2");
  }

  searchTime = () => {
console.log("3");
  }

  handelClick = (item) => () => {
    let value = true;
    for (let key in this.state) {
      if(key === item){
        this.state[key] === false?value = true:value = false;
        this.setState({
          [key]: value
        })
      }
    }
  }

  render(){
    return (
      <div className="col s12 containerMain">
        <div className="row containerSearch">
          <div className="input-field col s9">
            <input  type="text" className="validate" onChange={this.handleChange}/>
            <label className="active">Search</label>
          </div>
          <div className="input-field col s3">
            <button className="btn waves-effect waves-light button" type="submit" name="action" onClick={this.handelSumbit}>
              Search
            </button>
          </div>
          <div className="containerCheckbox">
              <Checkboxes type="checkbox" className="filled-in"  title="Search for game" onClick={this.handelClick("game")}/>
              <Checkboxes type="checkbox" className="filled-in"  title="Search for times" onClick={this.handelClick("time")}/>
              <Checkboxes type="checkbox" className="filled-in"  title="Search for days" onClick={this.handelClick("day")}/>
          </div>
        </div>

        {this.state.isSearchShow&&<div className="col s12 containerSearchUser">{this.state.newArrUser.map((user,i)=>{
          return (<SearchUser key={i} value={user}/>)
        })}</div>}
      </div>
    )
  }

}

export default ListSearch;
