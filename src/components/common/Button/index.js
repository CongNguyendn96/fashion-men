import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "@material-ui/core";

ButtonText.propTypes = {
  type: PropTypes.string,
  onActionClick: PropTypes.func,
  size: PropTypes.string,
};

ButtonText.defaultProps = {
  type: "button",
  onActionClick: null,
  size: "medium",
};

function ButtonText({ text, type, onActionClick, size }) {
  return (
    <div>
      <Button
        onClick={onActionClick}
        variant="contained"
        color="primary"
        type={type}
        size={size}
      >
        {text}
      </Button>
    </div>
  );
}

export default ButtonText;
