import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Utilites from "../../shared/Utils/Utils";
import axios from "axios";
import authService from "../../../api/auth.service";

export default function CustomList({ list }) {
  return (
    <List style={{ cursor: "pointer", marginLeft: "-16px" }}>
      {list.map((user, i) => (
        <ListItem key={user._id} onClick={() => addToFriends(user._id)}>
          <Avatar src={`file/${user.avatar.name}`} />
          <Box pl={1}>
            <ListItemText
              primary={user.userName}
              secondary={Utilites.getCreatedAt(user.created_at)}
            />
          </Box>
        </ListItem>
      ))}
    </List>
  );
  function addToFriends(userId) {
    if (userId) {
      axios.post(`/api/user/friends/${userId}`, null).then(({ data }) => {
        console.log(data);
      });
    }
  }
}
