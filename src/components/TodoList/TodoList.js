import React from "react";
import classNames from "classnames";
import Todo from "../Todo";
import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo, ontoggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames("TodoList__item", {
          "TodoList__item--completed": completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onDeleteTodo={() => onDeleteTodo(id)}
          ontoggleCompleted={() => ontoggleCompleted(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
