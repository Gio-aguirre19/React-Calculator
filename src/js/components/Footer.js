import React from "react";

var d = new Date();
var Year = d.getFullYear();

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>Giotest</div>
        <div>{ Year }</div>
      </footer>
  )}
}
