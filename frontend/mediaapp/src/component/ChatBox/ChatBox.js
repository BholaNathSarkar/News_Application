import { useEffect, useState } from "react";
import SocketIOClient from "socket.io-client";
import "./ChatBox.css";
const socket = SocketIOClient("http://localhost:4000");

const ChatBox = () => {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState([]);
  const [user, setUser] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat([...chat, data]);
    });
    socket.on("new_user", (data) => {
      setFriends(JSON.parse(data));
    });
  }, [chat]);

  function sendMessage(e) {
    e.preventDefault();
    // console.log(message);
    socket.emit("send_message", message);
    setMessage("");
    setChat([...chat, message]);
  }

  return (
    <>
      <div className="chat-box">
        <div className="chat-content">
          <ul>
            {chat.map((message, index) => {
              return (
                <li key={index} style={{ textColor: "red" }}>
                  {message}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="chat-input">
          <form onSubmit={sendMessage}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
