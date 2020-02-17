import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Input from "../shared/Input";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import UploadAvatar from "../shared/UploadAvatar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthService from "../../Services/auth.service";

function Register() {    
  const [text, setText] = useState("");
  const [avatar, setAvatar] = useState({ file: "", blob: {} });
  const [exists, setError] = useState(false);
  const history = useHistory();

  // Validate if userName already exts by db call
  useEffect(() => {
    if (text.length > 1) {
        axios.get("/api/validations", { params: text })
            .then(({ data }) => setError(data.exists))
            .catch(err => console.log(err));
    } 
  }, [text]);

  return (
    <Grid container justify="center">
      <Box mt={3}>
        <Container maxWidth="sm" textalign="center">
          <Typography align="center" variant="h5">
            Chat Register
          </Typography>
          <Box mt={3}>
            <Grid align="center">
              <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
            </Grid>
          </Box>
          <Input
            label={"User Name"}
            text={text}
            setText={setText}
            hasErrors={exists}
            setError={setError}
            
          />
          <Box mt={3}>
            <Grid align="center">
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={() => {
                  if (!exists) {
                    submit(text, avatar, setError, history);
                  }
                }}
              >
                Register
              </Button>
              <Box mt={2}>
                <Button color="primary" onClick={
                    () => history.push('/login')
                }>Already have an account?</Button>
              </Box>

            </Grid>
          </Box>
        </Container>
      </Box>
    </Grid>
  );
}

function submit(text, { blob }, setError, history) {
    console.log(AuthService);
    
  const formData = new FormData();
  formData.append("avatar", blob);
  formData.append("text", text.trim());
  axios.post("/api/user/register", formData, {
        headers: { "content-type": "multipart/form-data" }
    })
    .then(data => handleOnResponse(data, history))
    .catch(err => handleOnError(err.response, setError));
}

function handleOnResponse({ data }, history) {
  AuthService.setUser(data);
  history.push("/chat");
}

function handleOnError({ data }, setError) {
  const { errors } = data;
  errors.map(err => console.log(err));
}

export default Register;
