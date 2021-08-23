import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
      label ? ( // bbb? lll : nnn  is equal to if statement true? condition : else
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null //nothing appear
    }
  </div>
);

export default FormInput;
