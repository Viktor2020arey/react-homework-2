import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prewState) => ({
      visible: !prewState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? "Скрыть" : "Показать"}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
