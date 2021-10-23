import { Redirect } from "react-router"

const Chat = ({user}) => {
  let message;

  const handleInput = (e) => {
    message = e.target.value;
  }

  const sendMsg = () => {
    console.log(this);
  }

  return (
    user ?
    <div className="chat">
      <div className="message-area">
        <div className="bot-msg">
          <p>Welcome {user}</p>
        </div>
      </div>
      <div className="input-area">
        <input className="chat-input" type="text" placeholder="Enter a message" onChange={handleInput} />
        <button onClick={sendMsg}>Send</button>
      </div>
    </div> :
    <Redirect to="/login" />
  )
}

export default Chat