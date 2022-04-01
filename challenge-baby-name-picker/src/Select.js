import React from "react";
import babyNamesData from "./babyNamesData.json";

export class Select extends React.Component {
  handleChange = (event) => {
    this.props.changeName(event.target.value);
  };
  render() {
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select onChange={this.handleChange} id="great-names">
          {babyNamesData.map((item, index) => (
            <option key={index} value={item}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
