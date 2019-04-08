import React, { Component } from "react";
import "./App.css";
import schema from "./Resources/schema (002).json";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainSection from "./Components/MainSection/MainSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSectionPath: [],
      selectedSection: { name: "" },
      sections: schema.reduce(
        (result, property) => {
          if (property.containing_object) {
            result.push(property.containing_object);
          } else {
            result[0].properties.push({
              ...property,
              parent_id: "general_info"
            });
          }
          return result;
        },
        [{ id: "general_info", name: "general_info", properties: [] }]
      )
    };
  }

  handleChange = section => {
    this.setState(prevState => {
      const index = prevState.selectedSectionPath.indexOf(section.id);
      const parentIndex = prevState.selectedSectionPath.indexOf(
        section.parent_id
      );
      const isSelected = index > -1;
      const parentIsSelected = parentIndex > -1;
      let newSelectedSectionPath = [];

      if (parentIsSelected) {
        newSelectedSectionPath = prevState.selectedSectionPath.slice(
          0,
          parentIndex + 1
        );
      }

      if (!isSelected) {
        newSelectedSectionPath.push(section.id);
      }

      return {
        selectedSectionPath: newSelectedSectionPath,
        selectedSection: newSelectedSectionPath.length > 0 ? section : []
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Sidebar
          sections={this.state.sections}
          selectedSectionPath={this.state.selectedSectionPath}
          onChange={this.handleChange}
        />
        <MainSection value={this.state.selectedSection} />
      </div>
    );
  }
}

export default App;
