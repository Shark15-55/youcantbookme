import React, { useState } from "react";
import Puzzle from "./puzzle";
import Schdule from "./schdule";
import Login from "./Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"

function App() {

  const [user, setUser] = useState(null);

  // firebase-provided function to create global authentication object
  // const auth = getAuth();
  console.log("App auth", auth);
  console.log("App user", user)

  // firebase-provided function, which is run whenever auth state is updated
  onAuthStateChanged(auth, (user) => {
    if (user && !user.email.endsWith("@dalton.org")) {
      auth.signOut();
      setUser(null);
      alert("This site is only open to Dalton accounts.");
    } else {
      setUser(user);
    }
  });

  return (
    <div>
      {user ? <Schdule /> : <Login />}
    </div>
  );
}

export default App;
