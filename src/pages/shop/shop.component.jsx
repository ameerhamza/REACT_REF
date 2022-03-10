import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.styles";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

import CategoryPage from "../category/category.component";
import { fetchCollectionsStartAsync } from "./shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

const ShopPage = (props) => {
  const param = useParams();
  const { isCollectionLoaded, dispatchStart } = props;
  useEffect(() => {
    dispatchStart();
  }, []);
  return Object.keys(param).length !== 0 ? (
    <CategoryPageWithSpinner isLoading={!isCollectionLoaded} />
  ) : (
    <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} />
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchStart: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
