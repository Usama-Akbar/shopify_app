import React, { useState } from "react";
import "./sidebar.css";
import HomeIcon from "../../assets/images/home.png";
import EmailTemplateIcon from "../../assets/images/file.png";
import SidebarImage from "../../assets/images/sidebar-image.png";
import EmailIcon from "../../assets/images/envelope.png";
import SettingsIcon from "../../assets/images/settings.png";
import { useNavigate } from "raviger";

function getTranslateValue(url) {
  switch (url) {
    case "/dashboard":
      return "-5em";
    case "/emails":
    case "/edit-template":
      return "0em";
    case "/email-templates":
      return "5em";
    default:
      return "-1000em";
  }
}

const Sidebar = () => {
  const navigate = useNavigate();

  const [activeRoute, setActiveRoute] = useState(window.location.pathname);
  const [translateY, setTranslateY] = useState(
    getTranslateValue(window.location.pathname)
  );

  const handleNavigate = (url) => {
    navigate(url);
    setActiveRoute(url);
    setTranslateY(getTranslateValue(url));
  };
  return (
    <div className="sidebar-container">
      <div className="center-container">
        {/* sidebar image */}
        <img src={SidebarImage} className="sidebar-image" />
        {/* home icon */}
        <div
          className="animated-bar"
          style={{ transform: `translateY(${translateY})` }}
        />
        <div
          className="icon-container"
          onClick={() => handleNavigate("/dashboard")}
        >
          <img src={HomeIcon} />
        </div>
        {/* email icon */}
        <div
          className="icon-container"
          onClick={() => handleNavigate("/emails")}
        >
          <img src={EmailIcon} />
        </div>
        {/* email template icon */}
        <div
          className="icon-container"
          onClick={() => handleNavigate("/email-templates")}
        >
          <img src={EmailTemplateIcon} />
        </div>
      </div>
      {/* settings icon */}
      <div
        className="settings-container"
        onClick={() => handleNavigate("/settings")}
      >
        <img src={SettingsIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
