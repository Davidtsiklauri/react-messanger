import React from "react";
import "../chat.css";

function ChatBox({ mssg }) {
  return (
    <div className="chat__box__container">
      <span className="chat__box__container__message">{mssg.message}</span>
      <span className="chat__box__container__message chat__box__container__date">
        11:39:19 pm 18-12-2018
      </span>
    </div>
  );
}

export default ChatBox;
