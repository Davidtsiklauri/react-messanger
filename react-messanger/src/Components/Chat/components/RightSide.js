import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Input from "../../../Components/shared/Components/Input";
import axios from "axios";
import CustomList from "../../shared/Components/List";

function RightSide() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (text.length >= 1) {
      axios
        .get("api/user/search", {
          params: { query: text },
        })
        .then(({ data }) => setUsers(data))
        .catch((err) => console.log(err));
    } else {
      setUsers([]);
    }
  }, [text]);

  return (
    <>
      <Box borderColor="grey.500" borderBottom={1} pb={1}>
        <Typography variant="h4">Members</Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h5">Find users</Typography>
      </Box>

      <Box mt={3}>
        <Input label="search" setText={setText} />
      </Box>

      <Box mt={1}>
        <CustomList list={users}></CustomList>
      </Box>
    </>
  );
}

export default RightSide;
