import React from "react";
import Controls from "./Controls";
import "./Counter.css";

class Counter extends React.Component {
  static defaultProps = { initialValue: 0 };

  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
    console.log("Кликнули увеличить");
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
    console.log("Кликнули уменшить");
  };
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
