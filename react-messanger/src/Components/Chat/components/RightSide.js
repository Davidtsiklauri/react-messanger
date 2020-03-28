import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Input from '../../../Components/shared/Components/Input';
import axios from 'axios';
import authService from '../../../api/auth.service';
import CustomList from '../../shared/Components/List';


function RightSide () {

    const [ text, setText ] = useState('');
    const [ users, setUsers ] = useState([]); 
    
    useEffect(() => {
          if( text.length >= 1 ) {
              axios.get('api/user/search', { params: { query: text }, headers: { token: authService.getUserId() } })
                   .then( ({ data }) => setUsers( data ) ) 
                   .catch( err => console.log(err) );      
          } else {
               setUsers([])
          }
          
    }, [text])

    return (
        <>
         <Box  borderColor="grey.500" borderBottom={1} pb={1}>
                <Typography  variant="h4">
                        Members
                </Typography>
         </Box>

        <Box mt={3}>
            <Typography  variant="h5">
                    Find users
            </Typography>
        </Box>

        <Box mt={3}>
            <Input label='Type Name to Find user'  setText={setText}/>
        </Box>

        <Box mt={1}>
            <CustomList list={users}></CustomList>
        </Box>
          
        </>
    )
};

export default RightSide;