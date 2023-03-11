import React from "react";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

const ReactSelect = ({ menu = [], fullWidth = false }) => {
  return (
    <Select
      inputProps={{ "aria-label": "Without label" }}
      value={menu?.[0]?.label}
      style={{ fontFamily: "Bold", color: "#787878" }}
      fullWidth={fullWidth}
    >
      {menu.map((item) => (
        <MenuItem
          key={item.id}
          value={item.value}
          style={{ fontFamily: "Bold", color: "#787878" }}
        >
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default ReactSelect;
