import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategorySections } from "../../redux/category/category.selectors";

import MenuItem from "../menu-item/menu-item.component";

import "./category-list.styles.scss";

const CategoryList = ({ sections }) => (
  <div className="category-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectCategorySections,
});

export default connect(mapStateToProps)(CategoryList);
