import React from "react";
import Box from "@material-ui/core/Box";
import "../chat.css";
import UserAvatar from "../components/userAvatar";
import Typography from "@material-ui/core/Typography";

function ChanellsBox({ isActive }) {
  return (
    <div className={`box-channel  box-channel-active `}>
      <Box pl={2} pr={2} color="primary" display="flex" alignItems="center">
        <UserAvatar></UserAvatar>
        <Box pl={3}>
          <Typography variant="body1">Eric</Typography>

          <Typography variant="body1">Eric</Typography>
        </Box>
        <Box alignSelf="center">
          <Typography variant="body1">Eric</Typography>

          <Typography variant="body1">Eric</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default ChanellsBox;
