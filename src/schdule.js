import React, { Component, useState } from "react";
import Puzzle from "./puzzle";
import { auth } from "./firebase"



function Schdule() {
  const [puzzle, setPuzzle] = useState(true)
  const updatePuzzle = () => {
    setPuzzle(false);
  }
  return (
    <div>
      {puzzle ? <Time updatePuzzle={updatePuzzle}/>:<Puzzle />}
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}
class Time extends Component{
    constructor(props){
      super(props);
      this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',];
      this.times = ['10:00', '11:00','12:00', '1:00', '2:00', '3:00', '4:00',];
    }
    
    render(){
      return(
          <table>
            <thead>
              <tr className="Days">
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
                <TimeSlot key = {j*this.days.length + i}  time={time} updatePuzzle={this.props.updatePuzzle}/>
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
    const clicked = (e) => {
      console.log("Clicked");
      props.updatePuzzle();
    };

    return(
        <td>
          <div onClick = {e => {clicked(e)}} className = "time">
            {props.time}
          </div> 
        </td>
    );
  }
  export default Schdule;