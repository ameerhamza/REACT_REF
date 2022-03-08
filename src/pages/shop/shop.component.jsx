import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";

const ShopPage = ({ match }) => {
  const param = useParams();

  return Object.keys(param).length !== 0 ? (
    <CategoryPage />
  ) : (
    <CollectionsOverview />
  );
};

export default ShopPage;
