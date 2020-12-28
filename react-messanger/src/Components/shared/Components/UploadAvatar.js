import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../../assets/img/default.png";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

export function UploadAvatar(props) {
  const classes = useStyles();
  const { avatar, setAvatar } = props;

  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          uploadFile(e, setAvatar);
        }}
        id="upload"
        style={{ display: "none" }}
        accept="image/png, image/jpeg"
      ></input>
      <label htmlFor="upload">
        <Tooltip title="Upload  image">
          <Avatar
            alt="Remy Sharp"
            src={avatar.file ? avatar.file : logo}
            className={classes.large}
          />
        </Tooltip>
      </label>
    </>
  );
}

function uploadFile(e, setAvatarStateFn) {
  const file = e.target.files[0];
  if (!file || !file.type.startsWith("image")) return;
  const url = URL.createObjectURL(file);
  setAvatarStateFn({ file: url, blob: file });
}

export default UploadAvatar;
