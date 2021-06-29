import React from "react";

const Todo = ({ text, completed, ontoggleCompleted, onDeleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={ontoggleCompleted}
      ></input>

      <p className="TodoList__text">{text}</p>
      <button type="button" className="TodoList__btn" onClick={onDeleteTodo}>
        Удалить
      </button>
    </div>
  );
};

export default Todo;
