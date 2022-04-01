import React from "react";
import { Select } from "./Select";
import { Name } from "./Name";

export class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "Cornalies" };
  }
  changeName = (name) => {
    this.setState({ name: name });
  };
  render() {
    return (
      <div>
        <Select changeName={this.changeName} />
        <Name name={this.state.name} />
      </div>
    );
  }
}
