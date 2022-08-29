import React from "react";
import PropTypes from "prop-types";
import { FormControl, TextField } from "@material-ui/core";

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

InputText.defaultProps = {
  label: "Label",
  type: "text",
};

function InputText({ label, name, value, onChangeField, type }) {
  return (
    <FormControl classes={{ root: "form__wrapper" }}>
      <span className="form__label">{label}</span>
      <TextField
        fullWidth
        name={name}
        value={value}
        onChange={onChangeField}
        type={type}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        classes={{ root: "form-control" }}
      ></TextField>
    </FormControl>
  );
}

export default InputText;
