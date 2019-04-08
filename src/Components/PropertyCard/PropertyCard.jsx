import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { humanize } from "../../Utils";
import "./PropertyCard.css";

class PropertyCard extends PureComponent {
  render() {
    return (
      <table className="propertyTable">
        <thead>
          <tr>
            <th colSpan="2">{humanize(this.props.name)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Type</td>
            <td>{humanize(this.props.dataType)}</td>
          </tr>
          <tr>
            <td>Usage</td>
            <td>{this.props.appKeys.map(key => humanize(key) + "; ")}</td>
          </tr>
          <tr>
            <td>EverTrue Field Name</td>
            <td>{this.props.name}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
PropertyCard.propTypes = {
  appKeys: PropTypes.array,
  name: PropTypes.string,
  dataType: PropTypes.string
};

PropertyCard.defaultProps = {
  appKeys: [],
  name: "",
  dataType: ""
};
export default PropertyCard;
