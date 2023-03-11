import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../tabs/tabs.css";
import "./sidebar.css";

// imageicons
import HomeIcon from "../../assets/images/home.png";
import EmailTemplateIcon from "../../assets/images/file.png";
import SidebarImage from "../../assets/images/sidebar-image.png";
import EmailIcon from "../../assets/images/envelope.png";
import SettingsIcon from "../../assets/images/settings.png";
import { useNavigate } from "raviger";

const useStyles = makeStyles({
  root: {
    width: "7em",
    background: "white",
  },
  vertical: {
    background: "white",
    display: "flex",
    alignSelf: "center",
  },
});

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function getTabIndex(url) {
  switch (url) {
    case "/":
    case "/dashboard":
      return 0;
    case "/emails":
      return 1;
    case "/email-templates":
      return 2;
    default:
      return 0;
  }
}

const SidebarNew = () => {
  const [value, setValue] = React.useState(
    getTabIndex(window.location.pathname)
  );

  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img src={SidebarImage} className="sidebar-image" />

      <Tabs
        classes={classes}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          icon={<img src={HomeIcon} />}
          label=""
          {...a11yProps(0)}
          onClick={() => handleNavigate("/dashboard")}
          className="vTab"
        />

        <Tab
          label=""
          {...a11yProps(1)}
          onClick={() => handleNavigate("/emails")}
          className="vTab"
          icon={<img src={EmailIcon} />}
        />
        <Tab
          label=""
          {...a11yProps(2)}
          className="vTab"
          icon={<img src={EmailTemplateIcon} />}
          onClick={() => handleNavigate("/email-templates")}
        />
      </Tabs>
      <div
        className="settings-container"
        onClick={() => handleNavigate("/settings")}
      >
        <img src={SettingsIcon} className="settings-container" />
      </div>
    </div>
  );
};

export default SidebarNew;
