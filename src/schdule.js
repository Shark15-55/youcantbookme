import React, { Component } from "react";
import Puzzle from "./puzzle";

function Schdule() {
  return (
    <div>
      <Time />
    </div>
  );
}
class Time extends Component{
    constructor(props){
      super(props);
      this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',];
      this.times = ['10:00', '11:00','12:00', '1:00', '2:00', '3:00', '4:00',];
    }
    click(i,j){
      console.log(i,j);
      return(
        <Puzzle />
      );
    };
    render(){
      return(
          <table>
            <thead>
              <tr>
              {this.days.map((day) => (
                  <th key ={day}>{day}</th>
              ))
              }
              </tr>
            </thead>
            <tbody>
            {
            this.times.map((time,i) => (
              <tr key = {time}>
                {this.days.map((day,j) => (
                <TimeSlot key = {j*this.days.length + i} onClick = {() => this.click(i,j)} time={time}/>
                ))
                }
              </tr>
            ))
            }
            </tbody>
          </table>
      )
    }
  }
  
  function TimeSlot(props){
    return(
        <td>
          <div onClick = {() => props.onClick()} className = "time">
            {props.time}
          </div>
        </td>
    )
  }
  export default Schdule;