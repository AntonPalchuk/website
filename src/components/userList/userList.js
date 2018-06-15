import React, { Component } from 'react';
import './userList.css';


class UserList extends Component {
  constructor(){
    super();

  }

  render(){

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser.gameDay.Mon);
    return (
      <div className="containerAllListUser">
        <div className="conteinerContextListUser">
          <div className="containerImgUser">
            <img src={currentUser.img} className="UserImg"/>
          </div>
          <div>
            <div className="containerMainInfo">
              <div className="flex firstLastName">
                <h5>{currentUser.last_name + " " + currentUser.first_name}</h5>
              </div>
              <div className="flex">
                <p className="titleInfo">Main info</p>
                <p className="line"></p>
              </div>
              <div className="birthday flex">
                <p>Birthday:</p>
                <p>{currentUser.birthday}</p>
              </div>
              <div className="hometown flex">
                <p>Hometown:</p>
                <p>{currentUser.hometown}</p>
              </div>
              <div className="gender flex">
                <p>Gender:</p>
                <p>{currentUser.gender}</p>
              </div>
              <div className="nationality flex">
                <p>Nationality:</p>
                <p>{currentUser.nationality}</p>
              </div>
            </div>
            <div className="containerContactInfo">
              <div className="flex">
                <p className="titleInfo">Contact info</p>
                <p className="line"></p>
              </div>
              <div className="flex">
                <p>Mobile phone:</p>
                <p>{currentUser.mobilePhone}</p>
              </div>
              <div className="flex">
                <p>Addition phone:</p>
                <p>{currentUser.additionPhone}</p>
              </div>
              <div className="flex">
                <p>Skype:</p>
                <p>{currentUser.skype}</p>
              </div>
            </div>
            <div className="containerPersonalInfo">
              <div className="flex">
                <p className="titleInfo">Personal info</p>
                <p className="line"></p>
              </div>
              <div className="flex line-height">
                <p>Interests:</p>
                <p>{currentUser.interests}</p>
              </div>
              <div className="flex line-height">
                <p>Hobby:</p>
                <p>{currentUser.hobby}</p>
              </div>
              {currentUser.about !== ""&&<div className="flex line-height">
                <p>About:</p>
                <p>{currentUser.about}</p>
              </div>}
              <div className="flex">
                <p>Game days:</p>
                <div>{
                  currentUser.gameDay.Mon&&<button>Mon</button>}
                  {currentUser.gameDay.Tue&&<button>Tue</button>}
                  {currentUser.gameDay.Wed&&<button>Wed</button>}
                  {currentUser.gameDay.Thu&&<button>Thu</button>}
                  {currentUser.gameDay.Fri&&<button>Fri</button>}
                  {currentUser.gameDay.Sat&&<button>Sat</button>}
                  {currentUser.gameDay.Sun&&<button>Sun</button>
                }</div>
              </div>
              <div className="flex">
                <p>Time game:</p>
                <p>{currentUser.gameTime}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default UserList
