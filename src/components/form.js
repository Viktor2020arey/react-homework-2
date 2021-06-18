import React, { Component } from "react";

import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    tag: "",
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  chandleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Имя
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.chandleChange}
              id={this.nameInputId}
            ></input>
          </label>
          <label htmlFor={this.tagInputId}>
            Прозвище
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.chandleChange}
              id={this.tagInputId}
            ></input>
          </label>
          <button type="submit">Отправить</button>
        </form>
      </>
    );
  }
}

export default Form;
