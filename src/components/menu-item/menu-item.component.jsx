import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
  <div className="menu-item-container">
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className={`${title} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div />
      <div className="content-box">
        <div className="content">
          <h1 className="content-title">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </h1>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(MenuItem);
