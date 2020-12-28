import React, { useEffect } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import CenterContent from "./components/CenterContent";
import Grid from "@material-ui/core/Grid";
import Header from "./components/components/header";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import authService from "../../api/auth.service";
import { useHistory } from "react-router-dom";

import { useParams } from "react-router-dom";

function Chat() {
  const userName = authService.getUser()["userName"];
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {}, id);

  return (
    <>
      <Header>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pl={2}
          pr={2}
        >
          <h2 style={{ color: "white" }}>React Chat</h2>
          <div>
            <Button style={{ color: "white" }} disabled>
              {" "}
              {userName}{" "}
            </Button>
            <span style={{ color: "white" }}>|</span>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                logOut(history);
              }}
            >
              Logout
            </Button>
          </div>
        </Box>
      </Header>
      <Box p={2}>
        <Grid container direction="row">
          <Grid item sm={12} xs={12} md={2}>
            <Box pr={3}>
              <LeftSide />
            </Box>
          </Grid>

          <Grid item sm={12} xs={12} md={7}>
            <Box pr={3}>
              <CenterContent />
            </Box>
          </Grid>

          <Grid item sm={12} xs={12} md={3}>
            <Box pr={3}>
              <RightSide />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

function logOut(history) {
  history.push("/");
  authService.logOut();
}

export default Chat;
