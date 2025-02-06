import React from "react";
import "./LoadingPage.scss"; // Import styles
import logo from "../../Graphics/Norsman Logo 2024 Transparent.png";

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="Loading Logo" className="loading-logo" />
    </div>
  );
};

export default LoadingPage;
