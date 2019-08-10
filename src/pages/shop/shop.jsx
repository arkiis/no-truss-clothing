import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../category/collection.container";

import { fetchCollectionsStartAsnyc } from "../../pages/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsnyc } = this.props;
    fetchCollectionsStartAsnyc();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          Component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          Component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsnyc: () => dispatch(fetchCollectionsStartAsnyc())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
