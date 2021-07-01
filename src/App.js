import React, { Component } from "react";
// import axios from "axios";
// import shortid from "shortid";
import Container from "./components/Container";
// import Counter from "./components/Counter/Counter";
// import Dropdown from "./components/Dropdown/Dropdown";
// import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
// import initialTodos from "./todos.json";

import TodoEditor from "./components/TodoEditor";
import Filter from "./components/TodoList/Filter";

import Modal from "./components/Modal";

import IconButton from "./components/IconButton";
import { ReactComponent as AddIcon } from "./components/icons/add.svg";

import todosApi from "./components/services/todos-api";
// import Form from "./components/form";
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    todos: [],
    inputValue: "",
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    todosApi
      .fetchTodos()
      .then((todos) => this.setState({ todos }))
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      console.log("Обновилось поле todos, записываю todos в хранилище");
      localStorage.setItem("todos", JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = (text) => {
    const todoData = {
      text,
      completed: false,
    };

    todosApi.addTodo(todoData).then((todo) => {
      this.setState(({ todos }) => ({
        todos: [...todos, todo],
      }));
    });

    // this.toggleModal();
  };

  deleteTodo = (todoId) => {
    todosApi.deleteTodo(todoId).then(() => {
      this.setState(({ todos }) => ({
        todos: todos.filter(({ id }) => id !== todoId),
      }));
    });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  toggleCompleted = (todoId) => {
    const todo = this.state.todos.find(({ id }) => id === todoId);
    const { completed } = todo;

    todosApi
      .updateTodo(todoId, { completed: !completed })
      .then((updateTodo) => {
        this.setState(({ todos }) => ({
          todos: todos.map((todo) =>
            todo.id === updateTodo.id ? updateTodo : todo
          ),
        }));
      });
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();

    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <h1>Состояние компонента</h1> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Dropdown /> */}
        {/* <Counter initialValue={0} /> */}

        <IconButton onClick={this.toggleModal} aria-label="Добавить тодо">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>

        <Filter value={filter} onChange={this.changeFilter} />

        <div>
          <p>Общее количество: {totalTodoCount} </p>
          <p>Количество выполненых: {completedTodoCount}</p>
        </div>

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          ontoggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
