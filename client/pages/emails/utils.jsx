import { Typography } from "@mui/material";
import React from "react";
import ReactTable from "../../components/table/ReactTable";
import emails from "../../data/emails";

export const getTabComponent = (index) => {
  switch (index) {
    case 0:
      return <ReactTable data={emails.emailsData} />;
    default:
      return (
        <div className="container-fullwidth">
          <Typography
            variant="h6"
            component={"div"}
            className="bold dummy-text"
          >
            This screen is in development phase!
          </Typography>
        </div>
      );
  }
};
