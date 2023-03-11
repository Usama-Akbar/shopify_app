import React from "react";

// mui icons
import SecurityUpdateOutlinedIcon from "@mui/icons-material/SecurityUpdateOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import RightArrowIcon from "../../assets/images/right-arrow.png";
import CardBookmarkIcon from "../../assets/images/card-bookmark.png";
import RightArrowPurpleIcon from "../../assets/images/right-arrow-purple.png";
import CardBookmarkPurpleIcon from "../../assets/images/card-bookmark-purple.png";

export const iconTabs = [
  {
    id: 0,
    icon: (selected) => (
      <SecurityUpdateOutlinedIcon
        htmlColor={selected ? "#6434F8" : "#D9D9D9"}
      />
    ),
  },
  {
    id: 1,
    icon: (selected) => (
      <StarBorderOutlinedIcon htmlColor={selected ? "#6434F8" : "#D9D9D9"} />
    ),
  },
  {
    id: 2,
    icon: (selected) => (
      <AccessTimeOutlinedIcon htmlColor={selected ? "#6434F8" : "#D9D9D9"} />
    ),
  },
  {
    id: 3,
    icon: (selected) => (
      <SendOutlinedIcon htmlColor={selected ? "#6434F8" : "#D9D9D9"} />
    ),
  },
  {
    id: 4,
    icon: (selected) => (
      <img src={selected ? RightArrowPurpleIcon : RightArrowIcon} />
    ),
  },
  {
    id: 5,
    icon: (selected) => (
      <img src={selected ? CardBookmarkPurpleIcon : CardBookmarkIcon} />
    ),
  },
  {
    id: 6,
    icon: (selected) => (
      <PeopleAltOutlinedIcon htmlColor={selected ? "#6434F8" : "#D9D9D9"} />
    ),
  },
  {
    id: 7,
    icon: (selected) => (
      <DifferenceOutlinedIcon htmlColor={selected ? "#6434F8" : "#D9D9D9"} />
    ),
  },
  {
    id: 8,
    icon: (selected) => (
      <ErrorOutlineOutlinedIcon htmlColor={selected ? "#6434F8" : "#D9D9D9"} />
    ),
  },
];
