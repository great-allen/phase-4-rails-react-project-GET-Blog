import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Post from "./Post";
import NewPost from "./NewPost";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      
      <NavBar user={user} setUser={setUser}/>
      <Switch>
      <Route path="/new">
            <NewPost user={user} />
        </Route>
        <Route path="/">
            <Post />
          </Route>
      </Switch>
    </div>
    
  );
}

export default App;
