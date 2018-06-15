import React, { Component } from 'react';
import './formRegister.css';
import Input from '.././input/input.js'

class FormRegister extends Component{
  constructor(){
    super();
    this.state = {
      user:{
        first_name:"",
        last_name:"",
        password:"",
        email:"",
        birthday:"",
        hometown:"",
        gender:"",
        nationality:"",
        mobilePhone:"",
        additionPhone:"",
        skype:"",
        interests:"",
        hobby:"",
        about:"",
        gameDay: {Mon:false,Tue:false,Wed:false,Thu:false,Fri:false,Sat:false,Sun:false},
        gameTime: [],
        img: ""
      },
      userArr: JSON.parse(localStorage.getItem("userList"))
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
      let checkEmail = this.state.userArr.some((user)=>{
        console.log(user.email === this.state.user.email,user.email,this.state.user.email);
        return user.email === this.state.user.email
      })
      console.log(checkEmail);
      if(checkEmail){
        console.log("Sorry but that email exist");
      }else{
        console.log(this.state.user);
        this.setState({
          userArr: this.state.userArr.concat(this.state.user)
        },()=>{
          localStorage.setItem("userList",JSON.stringify(this.state.userArr))
          localStorage.setItem("currentUser",JSON.stringify(this.state.user))
          this.props.onSubmit(this.state.user);
        });
      }
  }

  handleChange = (key) => (e) =>{
    this.setState({
      user:{
        ...this.state.user, [key]: e.currentTarget.value
      }
    })

  }

  render(){
      console.log(this.state.userArr);
    return (
      <div className="row container">
        <form className="col s12" onSubmit={this.handleSubmit}>

            <Input type="text" className="validate" name="First Name" onChange={this.handleChange("first_name")} required/>
            <Input type="text" className="validate" name="Last Name" onChange={this.handleChange("last_name")} required/>
            <Input type="password" className="validate" name="Password" onChange={this.handleChange("password")} required/>
            <Input type="email" className="validate" name="Email" onChange={this.handleChange("email")} required/>

          <button type="submit" className="waves-effect waves-light btn-large">To register</button>
        </form>
      </div>
    )
  }
}

export default FormRegister;
