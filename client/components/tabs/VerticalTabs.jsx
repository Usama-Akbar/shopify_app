import * as React from "react";
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import "./tabs.css";
import AccountSettings from "../../pages/settings/AccountSettings";
import EmailCredsSettings from "../../pages/settings/EmailCredsSettings";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function getTabComponent(index) {
  switch (index) {
    case 0:
      return <AccountSettings />;
    case 1:
      return <EmailCredsSettings />;
  }
}
const VerticalTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label="Account"
          {...a11yProps(0)}
          className="vTab"
          style={{ fontFamily: "Bold" }}
          sx={{ minWidth: "18em", alignItems: "flex-start", marginLeft: "1em" }}
        />
        <Tab
          label="Email Credentials"
          style={{ fontFamily: "Bold" }}
          {...a11yProps(1)}
          className="vTab"
          sx={{ minWidth: "18em", alignItems: "flex-start", marginLeft: "1em" }}
        />
      </Tabs>
      {getTabComponent(value)}
    </Box>
  );
};

export default VerticalTabs;
