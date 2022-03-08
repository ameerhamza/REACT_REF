import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollections } from "../../redux/shop/shop.selectors";

import "./category.styles.scss";

const CategoryPage = ({ collections }) => {
  const param = useParams();
  const { title, items } = collections[param.categoryId];
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CategoryPage);
