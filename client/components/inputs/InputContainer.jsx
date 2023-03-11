import { Typography } from "@mui/material";
import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./inputs.css";

const InputContainer = ({ label, type = "text", inputMargin = "3em" }) => {
  const [value, setValue] = useState("");
  const [selectedType, setSelectedType] = useState(type);
  function handleChangeValue(event) {
    setValue(event.target.value);
  }

  function handleToggle() {
    if (selectedType === "password") {
      setSelectedType("text");
    } else {
      setSelectedType("password");
    }
  }

  return (
    <div className="input-container">
      <Typography
        variant="subtitle1"
        component="div"
        className="bold"
        style={{ fontFamily: "Bold" }}
      >
        {label}
      </Typography>
      <div className="input-field" style={{ marginLeft: inputMargin }}>
        <input
          className="input"
          type={selectedType}
          value={value}
          onChange={handleChangeValue}
        />
        {type === "password" && selectedType === "password" && (
          <VisibilityOffIcon color="#AEAEAE" onClick={handleToggle} />
        )}
        {type === "password" && selectedType === "text" && (
          <VisibilityIcon color="#AEAEAE" onClick={handleToggle} />
        )}
      </div>
    </div>
  );
};
export default InputContainer;
