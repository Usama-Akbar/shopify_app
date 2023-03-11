import * as React from "react";
import Typography from "@mui/material/Typography";
import "./card.css";
import LineGraph from "../graphs/LineGraph";

const EmailStatsCard = () => {
  return (
    <div className="custom-card-container">
      <div className="row-container">
        <Typography variant="h6" component="div" className="form-title mb-5">
          Email Statistics
        </Typography>
        <Typography
          variant="subtitle2"
          component="div"
          className="form-text fw-400"
        >
          email received VS email replied
        </Typography>
      </div>
      <LineGraph />
    </div>
  );
};

export default EmailStatsCard;
