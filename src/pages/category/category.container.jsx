import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.styles";
import CategoryPage from "./category.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CategoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CategoryPage);

export default CategoryContainer;
