import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";

function UserAvatar({fileUrl}) {
  return (
    <Badge variant="dot" color="error">
      <Avatar alt="Remy Sharp" src={`uploads/${fileUrl}`} />
    </Badge>
  );
}

export default UserAvatar;
