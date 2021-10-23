import './App.css';

import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './components/Home';
import Chat from './components/Chat';

function App() {
  const [loggedInUser, setloggedInUser] = useState(() => {
    return localStorage.getItem('user');
  });

  const handleUser = (user) => {
    setloggedInUser(user);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/"
          render={() => {
            return (
              loggedInUser ? <Redirect to="/chat" /> : <Redirect to="/login" />
            )
          }}
        />
        <Route exact path="/login">
          <Home userHandler={handleUser} user={loggedInUser} />
        </Route>
        <Route exact path="/chat">
          <Chat user={loggedInUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;