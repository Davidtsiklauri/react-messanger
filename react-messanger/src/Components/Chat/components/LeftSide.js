import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ChannelBox from "../components/components/Channelbox";

function LeftSide() {
  return (
    <>
      <Box borderColor="grey.500" borderBottom={1} pb={1}>
        <Typography variant="h4">Contacts</Typography>
      </Box>
      <Box mt={2}>
        <ChannelBox></ChannelBox>
        <ChannelBox isActive></ChannelBox>
      </Box>
    </>
  );
}

export default LeftSide;
