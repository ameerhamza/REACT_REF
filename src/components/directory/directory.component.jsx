import React from "react";

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  console.log("log", sections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...OtherProps }) => (
        <MenuItem key={id} {...OtherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return createStructuredSelector({
    sections: selectDirectorySections,
  });
};
export default connect(mapStateToProps)(Directory);
