import React from "react";
import Button from "@material-ui/core/Button";

function SimpleButton(props) {
  return (
    <Button variant="contained" color="primary" onClick={props.onClick}>
      {props.text}
    </Button>
  );
}

export default SimpleButton;
