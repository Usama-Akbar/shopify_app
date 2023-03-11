import * as React from "react";
import Typography from "@mui/material/Typography";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "./card.css";

const PurpleCustomCard = ({ data }) => {
  return (
    <div className="purple-card-container">
      <div className="container-one">
        <div className="row-container">
          <img src={data.image} alt="" className="card-image" />
          <img src={data.progressImage} alt="" className="progress-image" />
        </div>
        <Typography variant="h6" component="div" className="card-white-text">
          {data.title}
        </Typography>
        <div className="row-container">
          <Typography variant="p" component="div" className="card-white-text2">
            {data.description}
          </Typography>
          <Typography variant="p" component="div" className="card-white-text2">
            {data.duration}
          </Typography>
        </div>
      </div>
      <div className="container-two">
        <MoreVertOutlinedIcon htmlColor="white" fontSize="medium" />
      </div>
    </div>
  );
};

export default PurpleCustomCard;
