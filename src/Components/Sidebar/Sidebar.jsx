import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";
import { humanize } from "../../Utils";

class Sidebar extends PureComponent {
  generateSections = list =>
    list.map(section => [
      <div
        className={
          this.props.selectedSectionPath.indexOf(section.id) > -1
            ? "section selected"
            : "section"
        }
        key={section.name}
        onClick={() => this.props.onChange(section)}
      >
        {"| ".repeat(
          this.props.selectedSectionPath.indexOf(section.parent_id) + 1
        )}
        {humanize(section.name)}
      </div>,
      <div className="children" key={section.name + "_children"}>
        {section.properties &&
        this.props.selectedSectionPath.indexOf(section.id) > -1
          ? this.generateSections(section.properties)
          : null}
      </div>
    ]);

  render() {
    return (
      <div className="sidebar">
        {this.generateSections(this.props.sections)}
      </div>
    );
  }
}
Sidebar.propTypes = {
  selectedSection: PropTypes.any,
  selectedSectionPath: PropTypes.array,
  sections: PropTypes.any,
  onChange: PropTypes.func
};

Sidebar.defaultProps = {
  selectedSection: { name: "" },
  selectedSectionPath: []
};
export default Sidebar;
