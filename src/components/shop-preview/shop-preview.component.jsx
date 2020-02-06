import React from "react";
import { withRouter } from "react-router-dom";

import ShopItem from "../shop-item/shop-item.component";

import "./shop-preview.styles.scss";

const ShopPreview = ({ title, items, history, match, routeName }) => (
  <div className="shop-preview-container">
    <h1
      className="title"
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview-content">
      {items.map(item => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default withRouter(ShopPreview);
