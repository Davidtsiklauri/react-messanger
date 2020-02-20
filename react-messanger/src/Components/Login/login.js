import React, {  useState  } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Input from "../shared/Input";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import AuthService from '../../api/auth.service';
  

function Login() {    
  const [text, setText] = useState("");
  const [wrongCreditinals, setError] = useState(false);

  const history = useHistory();  
  
  return (
    <Grid container justify="center">
      <Box mt={3}>
        <Container maxWidth="sm" textalign="center">
          <Typography align="center" variant="h5">
            Chat Login
          </Typography>
          <Input
            label={"User Name"}
            error={"Wrong userName"}
            text={text}
            setText={setText}
            hasErrors={wrongCreditinals}
            setError={setError}
          />
          <Box mt={3}>
            <Grid align="center">
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={() => {
                    login(text.trim(), setError, history);
                }}>
                Login
              </Button>
              <Box mt={2}>
                 <Button color="secondary" onClick={
                      () => history.push('/register')
                 }>Don`t have an account ? </Button>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Grid>
  );
}
function login (userName, setError, history) {
  if(!userName) return;
  axios.post("/api/user/login",{ userName })
      .then(({data}) => {
             AuthService.setUser(data);
             history.push('/chat');
      })
      .catch(err => {                
            setError(true);
      });
};

export default Login;
