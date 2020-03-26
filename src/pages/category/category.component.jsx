import React from "react";

import { connect } from "react-redux";

import ShopItem from "../../components/shop-item/shop-item.component";
import ReactFullpage from "@fullpage/react-fullpage";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./category.styles.scss";

const CategoryPage = ({ collection }) => {
  const { items } = collection;
  return (
    <ReactFullpage
      // FUllscreen Options
      scrollingSpeed={1000} /* Options here */
      licenseKey={null}
      scrollOverflow={true}
      render={({ state, fullpageApi }) => {
        return (
          <div className="header-container">
            <div className="category">
              {/* <h2 className="category-page-title">
              {title}
              <span className="category-page-subtitle">
                <Link to="/shop" className="subtitle-link">
                   - Return to Shop here!
                </Link>
              </span>
            </h2> */}
              <div className="category-page-items">
                {items.map(item => (
                  <div className="section" key={item.id}>
                    <ShopItem key={item.id} item={item} isCategory={true} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
