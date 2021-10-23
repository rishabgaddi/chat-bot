import { Redirect } from "react-router";

const Home = (props) => {
  let username;

  const handleInput = (e) => {
    username = e.target.value;
  }

  const login = () => {
    const user = username && username.trim();
    if (user) {
      localStorage.setItem('user', user);
      props.userHandler(user);
    }
  }

  return (
    props.user ? <Redirect to="/chat" /> :
    <div>
      <input type="text" placeholder="Enter your name" onChange={handleInput}/>
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default Home