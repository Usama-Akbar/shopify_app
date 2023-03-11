import React from "react";
import "./settings.css";
import InputContainer from "../../components/inputs/InputContainer";
import { Button } from "@mui/material";

const EmailCredsSettings = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div style={{ marginTop: "6em" }} />
      <InputContainer label={"Provider"} inputMargin={"4em"} />
      <InputContainer label={"Username"} />
      <InputContainer
        label={"Password"}
        type={"password"}
        inputMargin={"3em"}
      />
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          margin: "2em",
          marginLeft: "14em",
        }}
      >
        <Button variant="outlined" className="btn-shadow form-title-btn">
          Save as Draft
        </Button>
        <div style={{ margin: "0px 7px" }} />
        <Button variant="contained" className="btn-shadow form-title-btn">
          Send
        </Button>
      </div>
    </div>
  );
};

export default EmailCredsSettings;
