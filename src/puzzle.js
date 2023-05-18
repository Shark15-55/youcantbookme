import { useState } from "react";


function Puzzle() {
    return (
        <div>
            <Rebus />
        </div>
    );
}

function Rebus() {
    const [answer, setAnswer] = useState(" ");

    function submit() {
        if (answer === "Children's University School") {
          alert("you win");
          console.log("winner");
        }else{
            console.log("try again");
            alert("try again");
        };
    };

    function click() {
        alert("It's Dalton's Orgnial Name");
    };

    function click2() {
        alert("First Word: Children's");
    };

    return(
        <div>
            <center>
            <img src= "rebus.png" width="800px"/>
            <br />
            <button onClick={click}>
                Hint 1
            </button>
            <button onClick={click2}>
                Hint 2
            </button>
          <form onSubmit={submit}>
              <label>
                Answer:
                <input type="text" value={answer} onChange={(event)=>setAnswer(event.target.value)}/>
              </label>
              <input type="submit" />
            </form>
            </center>
        </div>
      );
    };

export default Puzzle;