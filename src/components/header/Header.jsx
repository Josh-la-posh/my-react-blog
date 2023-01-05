import "./Header.css";

import React from "react";

export const Header = () => {
  return <div className="header">
      <div className="headerTitles">
          <span className="headerTitleSm">React & Nodes</span>
          <span className="headerTitleLg">Blog</span>
      </div>
      <img src="./images/home.jpg" alt="" className="headerImg" />
  </div>
};
