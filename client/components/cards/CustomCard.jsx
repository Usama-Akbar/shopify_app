import * as React from "react";
import Typography from "@mui/material/Typography";
import "./card.css";
import CircularProgressBar from "../progressbar/CircularProgressBar";

const CustomCard = ({ data }) => {
  return (
    <div className="custom-card-container">
      <div className="row-container">
        <img src={data.image} alt="" className="card-image" />
        <div className="progress-container">
          <CircularProgressBar percentage={data.progress} />
        </div>
      </div>
      <Typography variant="h6" component="div" className="card-text">
        {data.title}
      </Typography>
      <Typography variant="h4" component="div" className="card-text-bold">
        {data.count}
      </Typography>
      <Typography variant="p" component="div" className="form-text">
        {data.description}
      </Typography>
    </div>
  );
};

export default CustomCard;
