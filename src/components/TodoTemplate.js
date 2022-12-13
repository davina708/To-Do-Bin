import React from "react";
import "./TodoTemplate.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";

const TodoTemplate = ({ children }) => {
  return (
    <div className={"TodoTemplate"}>
      <div className={"app-title"}>
        <BsFillCheckCircleFill className="icon" />
        TO-DO-BIN
      </div>
      <div className={"content"}>{children}</div>
    </div>
  );
};

export default TodoTemplate;
