import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Input from '../shared/Input';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UploadAvatar from '../shared/UploadAvatar';


function Login() {

    const [ text, setText ] = useState('');
    const [ avatar, setAvatar ] = useState({ file: '', blob: { } });

     return  (
         <Grid container justify = "center">
            <Box mt={3} >
                <Container maxWidth="sm" textalign="center">
                    <Typography align="center" variant="h5"> 
                        Chat Login 
                    </Typography>
                    <Box mt={3}>
                        <Grid align="center">
                            <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
                        </Grid>
                    </Box>
                    <Input label={"User Name"} text={text} setText={setText} />
                    <Box mt={3} >
                        <Grid align="center">
                            <Button variant="contained" color="primary"  type="button"  onClick={ ( ) => {
                                  submit( text, avatar )
                            } }>
                                Login
                            </Button>
                        </Grid>
                    </Box>  
                </Container>
            </Box>
         </Grid>
     )
}

function submit( text, { blob } ) {
    console.log(text, blob );
}

export default Login; 

