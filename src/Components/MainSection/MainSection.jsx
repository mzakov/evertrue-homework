import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import PropertyCard from "../PropertyCard/PropertyCard";
import "./MainSection.css";
import { humanize } from "../../Utils";

class MainSection extends PureComponent {
  render() {
    return this.props.value.name ? (
      <div className="mainSection" key={this.props.value.name}>
        <div className="sectionTitle">{humanize(this.props.value.name)}</div>
        {this.props.value.properties ? (
          this.props.value.properties.map(property => (
            <PropertyCard
              key={property.name}
              dataType={property.data_type}
              appKeys={property.app_keys}
              name={property.name}
            />
          ))
        ) : (
          <PropertyCard
            dataType={this.props.value.data_type}
            appKeys={this.props.value.app_keys}
            name={this.props.value.name}
          />
        )}
      </div>
    ) : null;
  }
}

MainSection.propTypes = {
  value: PropTypes.any
};

MainSection.defaultProps = {};
export default MainSection;
