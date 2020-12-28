import React from "react";
import "../chat.css";

function ChatBox() {
  return (
    <div className="chat__box__container">
      <p style={{ marginTop: "0" }}>Fast</p>
      <span className="chat__box__container__message">Text</span>
      <span className="chat__box__container__message chat__box__container__date">
        11:39:19 pm 18-12-2018
      </span>
    </div>
  );
}

export default ChatBox;
