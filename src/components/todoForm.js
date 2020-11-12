import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
const TodoForm = (props) => {
  const { onSubmitHandle } = props;
  const { edit } = props;
  const [description, setDescription] = useState(edit ? edit.description : " ");
  const [deadline, setDeadline] = useState(edit ? edit.deadline : " ");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const onChangeDescriptionHanler = (e) => {
    const value = e.target.value;
    setDescription(value);
  };
  const onChangeDeadlineHanler = (e) => {
    const value = e.target.value;
    setDeadline(value);
  };
  const onSumbitHandler = (e) => {
    e.preventDefault();
    onSubmitHandle({
      id: Math.floor(Math.random() * 1000),
      description: description,
      deadline: deadline,
    });
    setDescription("");
  };

  return (
    <form>
      {props.edit ? (
        <>
          <div className="todo-form">
            <input
              type="text"
              onChange={onChangeDescriptionHanler}
              value={description}
              name="description"
              ref={inputRef}
              className="todo-input"
              placeholder="add todo description"
            />
            <input
              type="date"
              onChange={onChangeDeadlineHanler}
              value={deadline}
              name="deadline"
              className="todo-input"
            />
            <br />
            <button onClick={onSumbitHandler} className="todo-button ">
              update
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="todo-form">
            <input
              type="text"
              onChange={onChangeDescriptionHanler}
              value={description}
              name="description"
              ref={inputRef}
              className="todo-input"
              placeholder="add todo description"
              required
            />
            <input
              type="date"
              onChange={onChangeDeadlineHanler}
              value={deadline}
              name="deadline"
              className="todo-input"
              required
              /* ref={inputRef} */
            />
            <br />
            <button onClick={onSumbitHandler} className="todo-button ">
              Add todo
            </button>
          </div>
        </>
      )}
    </form>
  );
};

TodoForm.propTypes = {
  onSave: PropTypes.func,
  description: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
};
TodoForm.defaultProps = {
  deadline: new Date().toISOString().slice(0, 10),
};
export default TodoForm;
