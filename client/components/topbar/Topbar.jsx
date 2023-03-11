import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useRoutes } from "raviger";
import routes from "../../Routes";
import { styled } from "@mui/material/styles";
import {
  getCurrentRouteName,
  getCurrentTitle,
} from "../../helpers/reusableFunctions.js";

// mui icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AvatarImage from "../../assets/images/user.jpg";
import "./topbar.css";

const StyledAppBar = styled(AppBar)(({ theme, isOpen }) => ({
  backgroundColor: "#FFFFFF",
  color: "black",
  boxShadow: "none",
  padding: "5px 0px",
  borderBottom: "0.1px solid grey",
}));
const TopBar = () => {
  const RouteComponents = useRoutes(routes);

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={"profile-menu"}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <div>
            <Typography
              variant="subtitle1"
              component="div"
              style={{ fontFamily: "Bold" }}
            >
              {getCurrentTitle(window.location.pathname)}
            </Typography>
            <div className="row-container">
              <Typography
                variant="caption"
                component="div"
                style={{ fontFamily: "Regular" }}
              >
                {getCurrentRouteName(window.location.pathname)}
              </Typography>
              <ExpandMoreIcon />
            </div>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <HelpOutlineOutlinedIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge variant="dot" color="error">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar src={AvatarImage} />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMenu}
      </StyledAppBar>
      <div className="screen-container">{RouteComponents}</div>
    </Box>
  );
};

export default TopBar;
