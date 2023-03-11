import React from "react";
import Select from "@mui/material/Select";
import { MenuItem, Typography } from "@mui/material";

const ReactLabelSelect = ({ menu = [], label, fullWidth = false }) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        width: "100%",
        marginTop: "1em",
      }}
    >
      <Typography
        variant="subtitle1"
        component="div"
        color={"#787878"}
        className="bold"
        style={{
          border: "1px solid #D9D9D9",
          padding: "1em",
          minWidth: "7em",
          justifyContent: "center",
          fontFamily: "Bold",
        }}
      >
        {label}
      </Typography>
      <Select
        inputProps={{ "aria-label": "Without label" }}
        style={{ fontFamily: "Bold", color: "#787878", minWidth: 200 }}
        value={menu?.[0]?.label}
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
    </div>
  );
};

export default ReactLabelSelect;
