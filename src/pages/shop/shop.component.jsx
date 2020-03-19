import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./shop.styles.scss";

import {
  firestore,
  convertSnapshotToObject
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import LoadingSkeleton from "../../components/loading-skeleton/loading-skeleton.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";

const CollectionsOverviewWithSkeleton = LoadingSkeleton(CollectionsOverview);
const CategoryPageWithSkeleton = LoadingSkeleton(CategoryPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertSnapshotToObject(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSkeleton isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={props => (
            <CategoryPageWithSkeleton isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
