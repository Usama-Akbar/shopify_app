import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./settings.css";
import InputContainer from "../../components/inputs/InputContainer";

const AccountSettings = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div className="profile-container">
        <div className="centered left-margin">
          <Typography
            variant="h6"
            component="div"
            style={{ fontFamily: "Regular" }}
          >
            Your Photo
          </Typography>
        </div>
        <div className="profile-avatar-container">
          <div className="profile-avatar" />
        </div>
        <div className="centered">
          <Button variant="outlined" className="btn-shadow form-title-btn">
            Delete
          </Button>
          <div style={{ margin: "0px 7px" }} />
          <Button variant="contained" className="btn-shadow form-title-btn">
            Upload
          </Button>
        </div>
      </div>
      <InputContainer label={"Name"} inputMargin={"7em"} />
      <InputContainer label={"Email"} type={"email"} inputMargin={"7em"} />
      <InputContainer label={"Linked Store"} />
      <InputContainer
        label={"Password"}
        type={"password"}
        inputMargin={"4.5em"}
      />
    </div>
  );
};

export default AccountSettings;
