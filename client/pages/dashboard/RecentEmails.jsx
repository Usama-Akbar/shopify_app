import { Typography } from "@mui/material";
import React from "react";
import ReactTable from "../../components/table/ReactTable";
import emails from "../../data/emails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const RecentEmails = () => {
  return (
    <div>
      <div className="row-container">
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            className="form-title"
            style={{ marginRight: "1em" }}
          >
            Recent Emails
          </Typography>
          <Typography variant="subtitle1" component="div" color={"grey"}>
            10
          </Typography>
        </div>
        <ExpandMoreIcon fontSize="large" />
      </div>
      <ReactTable data={emails.recentEmails} height="auto" />
    </div>
  );
};

export default RecentEmails;
