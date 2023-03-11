import { Checkbox } from "@mui/material";
import React, { useState } from "react";

// import icons
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import RightArrowIcon from "../../assets/images/right-arrow.png";
import RightArrowIconPurple from "../../assets/images/right-arrow-purple.png";
import "./table.css";

const NameCell = ({ value, column, handleNavigate }) => {
  const [state, setState] = useState({
    checked: false,
    isBookmarked: false,
    isFavorite: false,
  });

  const handleState = (prop) => () => {
    setState({ ...state, [prop]: !state[prop] });
  };

  const handleStateCheckbox = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.checked });
  };

  return (
    <div className="cell-row" style={{ color: column.color }}>
      <Checkbox
        checked={state.checked}
        onChange={handleStateCheckbox("checked")}
      />
      <div className="cell-item" onClick={handleState("isFavorite")}>
        <StarBorderOutlinedIcon
          fontSize="medium"
          htmlColor={state.isFavorite ? "#6434F8" : "#D9D9D9"}
        />
      </div>
      <div className="cell-item" onClick={handleState("isBookmarked")}>
        {state.isBookmarked ? (
          <img src={RightArrowIconPurple} className="icon-image" />
        ) : (
          <img src={RightArrowIcon} className="icon-image" />
        )}
      </div>
      <div
        className="cell-item"
        onClick={handleNavigate}
        style={{ width: "100%" }}
      >
        {value}
      </div>
    </div>
  );
};

export function getTableCell(column, index, value, handleNavigate) {
  switch (index) {
    case 0: {
      return (
        <NameCell
          value={value}
          column={column}
          handleNavigate={handleNavigate}
        />
      );
    }
    case 2: {
      return (
        <div
          className="cell-item"
          style={{
            color: column.color,
            display: "flex",
            justifyContent: "center",
            flex: 1,
          }}
          onClick={handleNavigate}
        >
          {value}
        </div>
      );
    }
    case 3: {
      return (
        <div
          className="cell-item"
          style={{
            color: column.color,
            display: "flex",
            justifyContent: "center",
            flex: 1,
          }}
          onClick={handleNavigate}
        >
          {value}
        </div>
      );
    }
    case 1:
    case 4: {
      return (
        <div
          className="cell-item"
          onClick={handleNavigate}
          style={{ justifyContent: "center", display: "flex", flex: 1 }}
        >
          {value}
        </div>
      );
    }
  }
}
