import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

function Input(props) {
  const err = props.error ||  "User already exists";
  const { label, setText, hasErrors, setError } = props;

  return (
    <Box mt={2}>
      <TextField
        id="standard-basic"
        label={label}
        onKeyUp={({ target }) => {
            setText(target.value);
            if( hasErrors ) {
                setError(false);
            }
        }}
        error={hasErrors}
        helperText={hasErrors ? err : null}
        autoComplete="off"
      />
    </Box>
  );
}

export default Input;
