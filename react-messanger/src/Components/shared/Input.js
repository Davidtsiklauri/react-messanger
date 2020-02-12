import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


function Input( props ) { 
    const { label, text , setText } = props;
    return (
        <Box mt={2}>
            <TextField id="standard-basic" label={label} onKeyUp={ (e) => {
                  handleUserInput( e, setText  );
            } }/>
        </Box>
    )

    
}

function handleUserInput(e, setStateFn) {
       return setStateFn(e.target.value);
};


export default Input;