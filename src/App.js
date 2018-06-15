import React, { Component } from 'react';
import './App.css';
import FormRegister from "./components/formRegister/formRegister.js"
import FormLogin from "./components/formLogin/formLogin.js"
import UserList from "./components/userList/userList.js"
import EditUserList from './components/editUserList/editUserList.js';
import Header from './components/header/header.js';
import ListSearch from './components/listSearch/listSearch.js';

const mapingPage = {
        register:{
          component: FormRegister,
          isHeaderShown: false
        },
        login:{
          component: FormLogin,
          isHeaderShown: false
        },
        userList:{
          component: UserList,
          isHeaderShown: true
        },
        editUserList:{
          component: EditUserList,
          isHeaderShown: true
        },
        listSearch:{
          component: ListSearch,
          isHeaderShown: true
        }
      }

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentPage: "login",
      arrHistoryPages: []
    };
  }

  handleSubmit = (user)=> {
    this.changePage("userList");
  }

  backPage = () =>{
    let newArr = this.state.arrHistoryPages.slice(0,this.state.arrHistoryPages.length - 1),
        page = newArr[newArr.length - 1]
        console.log(newArr);
    this.setState({
      arrHistoryPages: newArr,
      currentPage: page
    })

  }

  changePage = (page) => {
    if(page === "login"){
      this.setState({
        arrHistoryPages: []
      })
      localStorage.setItem("currentUser", JSON.stringify(""))
    }
    if(page !== this.state.currentPage){
      this.setState({
        currentPage:page,
        arrHistoryPages: this.state.arrHistoryPages.concat(page)
      })
    }

  }

  render(){
    console.log(this.state.arrHistoryPages);
    const Component = mapingPage[this.state.currentPage].component,
          isHeaderShown = mapingPage[this.state.currentPage].isHeaderShown;
    return (
      <div className="app">
        {isHeaderShown&&<Header changePage={this.changePage}/>}
        <Component onSubmit={this.handleSubmit} changePage={this.changePage} backPage={this.backPage}/>
      </div>
    )
  }
}
export default App;
