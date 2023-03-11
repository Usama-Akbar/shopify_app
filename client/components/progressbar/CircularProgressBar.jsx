import React from "react";
import {
  buildStyles,
  CircularProgressbar as CircularProgress,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const customStyles = buildStyles({
  // Rotation of path and trail, in number of turns (0-1)
  rotation: 0,

  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
  strokeLinecap: "round",

  // Text size
  textSize: "20px",

  // How long animation takes to go from one percentage to another, in seconds
  pathTransitionDuration: 0.5,

  // Colors
  pathColor: "#6434F8",
  textColor: "#6434F8",
  trailColor: "#F5F5F5",
});
const CircularProgressBar = ({ percentage = 66 }) => {
  return (
    <CircularProgress
      value={percentage}
      text={`${percentage}%`}
      strokeWidth={10}
      styles={customStyles}
    />
  );
};

export default CircularProgressBar;
