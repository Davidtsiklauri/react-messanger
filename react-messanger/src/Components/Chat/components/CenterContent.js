import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./chat.css";
import ChatBox from "./components/chat-box";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { SocketHelper, MessageData } from "../../../utilities/socketHelper";

function CenterContent({ convId }) {
  const socketInstance = SocketHelper.getInstance();
  const ref = React.createRef();

  return (
    <>
      <Box borderColor="grey" borderBottom={1} pb={1}>
        <Typography variant="h4">Messages</Typography>
      </Box>
      <div className="chat">
        <Box height="75%" className="chat__box">
          <ChatBox></ChatBox>
          <ChatBox></ChatBox>
        </Box>
        <Box height="25%" mt={3}>
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              id="outlined-adornment-amount"
              placeholder="Send Message"
              onKeyDown={(e) =>
                (e.nativeEvent.key == "Enter" && sendMessage(e.target.value)) ||
                (e.nativeEvent.key !== "Enter" &&
                  socketInstance.sendTypingEvent())
              }
              ref={ref}
            />
          </FormControl>
          <Box textAlign="right" mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => sendMessage(ref.current.firstChild.value)}
            >
              Send
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );

  function sendMessage(value) {
    socketInstance.sendMessage(new MessageData(value, "david", convId));
  }
}

export default CenterContent;
