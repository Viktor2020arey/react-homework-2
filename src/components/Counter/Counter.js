import React from "react";
import { connect } from "react-redux";
import Controls from "./Controls";
import * as actions from "../../redux/actions";
import Value from "./Value";
import "./Counter.css";

function Counter({ value, onIcrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls onIncrement={onIcrement} onDecrement={onDecrement} />
      Counter
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.counterValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIcrement: () => dispatch(actions.increment(5)),
    onDecrement: () => dispatch(actions.decrement(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
