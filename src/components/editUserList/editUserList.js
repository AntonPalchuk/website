import React, { Component } from 'react';
import Input from '.././input/input.js';
import TextArea from '.././textArea/textArea.js';
import Checkboxes from '.././checkboxes/checkboxes.js';
import './editUserList.css';



class EditUserList extends Component {
  constructor(){
    super();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
    this.state = {
      user: currentUser,
      buttonPressed: ""
    }
  }

    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.buttonPressed === "save"){
        let arrUser = JSON.parse(localStorage.getItem("userList")),
            newArrUser = arrUser.filter((user)=>{
              return user.email !== this.state.user.email
            }).concat(this.state.user)
            localStorage.setItem("userList", JSON.stringify(newArrUser));
            localStorage.setItem("currentUser", JSON.stringify(this.state.user));
            this.props.changePage("userList");
      }else{
        this.props.backPage();
      }
    }

    handleChange = (key) => (e) =>{
      console.log(e.currentTarget.value);
      this.setState({
        user:{
          ...this.state.user, [key]: e.currentTarget.value
        }
      })
    }

    handelClick = (key) => (e) =>{
      console.log(this.state.user.gameDay,e.currentTarget.value,key);
      // let item = true;
      //     this.state.user.gameDay[key]?item = false:item = true;
      //     console.log(this.state.user.gameDay[key]);
      this.setState({
        user:{
          ...this.state.user,
          gameDay:{
            ...this.state.user.gameDay,
            [key]: e.currentTarget.checked
          }
        }
      })
    }

    clickButton  = (key) => (e) =>{
      this.setState({
        buttonPressed: key
      })
    }

  render(){
    console.log(this.state.user);
    return (
      <div>

        <form className="col s12 styleEditMenu" onSubmit={this.handleSubmit}>
          <Input  type="date" className="validate" name="Birthday" onChange={this.handleChange("birthday")} value={this.state.user.birthday}/>
          <Input  type="text" className="validate" name="Hometown" onChange={this.handleChange("hometown")} value={this.state.user.hometown}/>
          <Input  type="text" className="validate" name="Gender" onChange={this.handleChange("gender")} value={this.state.user.gender}/>
          <Input  type="text" className="validate" name="Nationality" onChange={this.handleChange("nationality")} value={this.state.user.nationality}/>
          <Input  type="text" className="validate" name="Img" onChange={this.handleChange("img")} value={this.state.user.img}/>
          <Input  type="text" className="validate" name="MobilePhone" onChange={this.handleChange("mobilePhone")}  value={this.state.user.mobilePhone}/>
          <Input  type="text" className="validate" name="AdditionPhone" onChange={this.handleChange("additionPhone")} value={this.state.user.additionPhone}/>
          <Input  type="text" className="validate" name="Skype" onChange={this.handleChange("skype")} value={this.state.user.skype}/>
          <TextArea  type="text" className="validate materialize-textarea textarea.materialize-textarea.valide" name="Interests" onChange={this.handleChange("interests")} value={this.state.user.interests}/>
          <Input  type="text" className="validate" name="Hobby" onChange={this.handleChange("hobby")} value={this.state.user.hobby}/>
          <Input  type="text" className="validate" name="About" onChange={this.handleChange("about")} value={this.state.user.about}/>
          <div>
            <Checkboxes type="checkbox" className="filled-in"  title="Mon" value={this.state.user.gameDay.Mon} onChange={this.handelClick("Mon")}/>
            <Checkboxes type="checkbox" className="filled-in"  title="Tue" value={this.state.user.gameDay.Tue} onChange={this.handelClick("Tue")}/>
            <Checkboxes type="checkbox" className="filled-in"  title="Wed" value={this.state.user.gameDay.Wed} onChange={this.handelClick("Wed")}/>
            <Checkboxes type="checkbox" className="filled-in"  title="Thu" value={this.state.user.gameDay.Thu} onChange={this.handelClick("Thu")}/>
            <Checkboxes type="checkbox" className="filled-in"  title="Fri" value={this.state.user.gameDay.Fri} onChange={this.handelClick("Fri")}/>
            <Checkboxes type="checkbox" className="filled-in"  title="Sat" value={this.state.user.gameDay.Sat} onChange={this.handelClick("Sat")}/>
            <Checkboxes type="checkbox" className="filled-in"  title="Sun" value={this.state.user.gameDay.Sun} onChange={this.handelClick("Sun")}/>
          </div>
          <Input  type="time" className="validate" name="GameTime" onChange={this.handleChange("gameTime")} value={this.state.user.gameTime}/>
          <button type="submit" className="waves-effect waves-light btn-large" onClick={this.clickButton("save")}>Save</button>
          <button type="submit" className="waves-effect waves-light btn-large" onClick={this.clickButton("back")}>Back</button>
        </form>
      </div>
    )
  }

}

  export default EditUserList
