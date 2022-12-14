import React, { useState } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdDelete,
  MdModeEditOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  const [editMode, setEditMode] = useState(false);
  const [newTodo, setNewTodo] = useState(text); //새로운 투두

  const handleEditMode = () => {
    // 클릭시 edited 값을 true로 바꿈
    setEditMode(!editMode);
  };

  const onChangeEditInput = (e) => {
    setNewTodo(e.target.value);
  };

  const onClickSubmitButton = () => {
    const nextTodoList = todo.map((item) => ({
      //*****객체를 map할 수 없다.. 여기 어떡하냐..
      ...item,
      text: item.id === todo.id ? newTodo : item.text, // 새로운 아이템 내용을 넣어줌
    }));
    setNewTodo(nextTodoList); // 새로운 리스트를 넣어줌

    setEditMode(false); // 수정모드를 다시 읽기모드로 변경
  };

  return (
    <div className={"TodoListItem"}>
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className={"text"}>{text}</div>
      </div>
      {editMode ? (
        <>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={onClickSubmitButton}>✓</button>
          <button onClick={handleEditMode}>ｘ</button>{" "}
        </>
      ) : (
        <>
          <MdModeEditOutline className={"edit"} onClick={handleEditMode} />
        </>
      )}
      <div className={"remove"} onClick={() => onRemove(id)}>
        <MdDelete />
      </div>
    </div>
  );
};

export default TodoListItem;
