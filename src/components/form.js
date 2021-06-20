import React, { Component } from "react";

import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    license: false,
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

  handleLicenseChange = (e) => {
    console.log(e.currentTarget.checked);
    this.setState({ license: e.currentTarget.checked });
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

          <p>Ваш уровень</p>
          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.chandleChange}
              checked={this.state.experience === "junior"}
            />
            Junior
          </label>

          <label>
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.chandleChange}
              checked={this.state.experience === "middle"}
            />
            Middle
          </label>

          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.chandleChange}
              checked={this.state.experience === "senior"}
            />
            Senior
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="license"
              checked={this.state.license}
              onChange={this.handleLicenseChange}
            />
            Согласен с условиями
          </label>
          <button type="submit" disabled={!this.state.license}>
            Отправить
          </button>
        </form>
      </>
    );
  }
}

export default Form;
