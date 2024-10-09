import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  onhandleDeleteTodo,
  key,
  data,
  onHandleCheckedTodo,
  checked,
}) => {
  return (
    <li key={key} className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onhandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
