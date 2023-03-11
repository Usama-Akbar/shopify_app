import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./tabs.css";
import { iconTabs } from "./iconTabs";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      height: 2,
      width: "100%",
      backgroundColor: "#6434F8",
    },
  },
});

const IconTabs = ({ value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      className="icon-tab-container"
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
      classes={classes}
    >
      {iconTabs.map((tab) => (
        <Tab
          key={tab.id}
          icon={tab.icon(value === tab.id)}
          className="tab"
          style={{ color: "#6434F8" }}
        />
      ))}
    </Tabs>
  );
};

export default IconTabs;
