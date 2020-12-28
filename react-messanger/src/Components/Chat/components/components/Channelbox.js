import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import "../chat.css";
import UserAvatar from "../components/userAvatar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

function ChanellsBox({ isActive }) {
  const [friendList, setFriendList] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/user/friends");
      setFriendList(data);
    })();
  }, []);
  return (
    <>
      {friendList.map((user) => (
        <div className={`box-channel  box-channel-active `} key={user._id}>
          <Box pl={2} pr={2} color="primary" display="flex" alignItems="center">
            <UserAvatar fileUrl={user.avatar.name}></UserAvatar>
            <Box pl={1}>
              <Typography variant="body1">{user.userName}</Typography>
            </Box>
          </Box>
        </div>
      ))}
    </>
  );
}

export default ChanellsBox;
