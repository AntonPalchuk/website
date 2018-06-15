import React, { Component } from 'react';
import Input from '.././input/input.js'


class FormLogin extends Component{
  constructor(){
    super();
    this.state = {
      user:{
        email:"",
        password:""
      },

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let userList = JSON.parse(localStorage.getItem("userList")),
        checkUserEmail = userList.some((user)=>{
          if(user.email === this.state.user.email&&user.password === this.state.user.password) {
            localStorage.setItem("currentUser",JSON.stringify(user))
          }
          return user.email === this.state.user.email&&user.password === this.state.user.password
        })
        console.log(checkUserEmail);
        if(checkUserEmail){
          this.props.onSubmit(this.state.user);
        }else{
          console.log("Sorry but that email or password not exist");
        }
  }

  handleChange = (key) => (e) => {
    this.setState({
      user:{
        ...this.state.user, [key]: e.currentTarget.value
      }
    })

  }

  handleClick = () => {
    this.props.changePage("register");
  }

  render(){
    return (
      <div className="row container">
        <form className="col s12" onSubmit={this.handleSubmit}>

            <Input type="email" className="validate" name="Email" onChange={this.handleChange('email')} required/>
            <Input type="password" className="validate" name="Password" onChange={this.handleChange('password')} required/>

          <button type="submit" className="waves-effect waves-light btn-large">Login</button>
          <a onClick={this.handleClick}><p>To register?</p></a>
        </form>
      </div>
    )
  }

}

export default FormLogin;
