import React from "react";
import "./TodoTemplate.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

const TodoTemplate = ({ children }) => {
  return (
    <div className={"TodoTemplate"}>
      <div className={"app-title"}>
        <BsFillCheckCircleFill className="icon" />
        <div>TO-DO-BIN</div>
        <HiMenu className="icon" />
      </div>
      <div className={"content"}>{children}</div>
    </div>
  );
};

export default TodoTemplate;
