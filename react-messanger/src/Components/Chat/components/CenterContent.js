import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./chat.css";
import ChatBox from "./components/chat-box";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

function CenterContent() {
  return (
    <>
      <Box borderColor="grey" borderBottom={1} pb={1}>
        <Typography variant="h4">Messages</Typography>
      </Box>
      <div className="chat">
        <Box height="75%" className="chat__box">
          <ChatBox></ChatBox>
          <ChatBox></ChatBox>
          <ChatBox></ChatBox>
          <ChatBox></ChatBox>
          <ChatBox></ChatBox>
          <ChatBox></ChatBox>
          <ChatBox></ChatBox>
          <ChatBox></ChatBox>
          <ChatBox></ChatBox>
          <ChatBox></ChatBox>
          <ChatBox></ChatBox>
        </Box>
        <Box height="25%" mt={3}>
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              id="outlined-adornment-amount"
              placeholder="Send Message"
            />
          </FormControl>
          <Box textAlign="right" mt={2}>
            <Button variant="contained" color="primary">
              Send
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default CenterContent;
