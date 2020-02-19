import React from "react";
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import CenterContent from './components/CenterContent';
import Grid from "@material-ui/core/Grid";


function Chat() {
  return (
    <Grid container direction='row'>
      
      <Grid item sm={12} xs={12} md={4}>
        <LeftSide/>
      </Grid>
      
      <Grid item sm={12} xs={12} md={4}>
        <RightSide/>
      </Grid>

      <Grid item sm={12} xs={12} md={4}>
        <CenterContent/>
      </Grid>

    </Grid>
  );
}

export default Chat;
