import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";

function UserAvatar() {
  return (
    <Badge variant="dot" color="error">
      <Avatar alt="Remy Sharp" src="uploads/36ac283984d5887a2b5bc3b8a0304a4e" />
    </Badge>
  );
}

export default UserAvatar;
