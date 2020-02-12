import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ShopPreview from "../shop-preview/shop-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <ShopPreview key={id} {...otherCollectionProps}></ShopPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
