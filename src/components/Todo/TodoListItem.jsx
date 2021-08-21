import React from "react";
import { useDispatch } from "react-redux";
import { changeStatusTodo, removeTodo } from "../../store/reducer/todoFunctional";
function TodoListItem({ todo,colors }) {

    const dispatch=useDispatch();
    const handelClickChangeStatus=()=>{
        dispatch(changeStatusTodo(todo.id));
    }

    const handelRemoveTodo=()=>{
        dispatch(removeTodo(todo.id))
    }



    const colorsRadio=colors.map((color,index)=>{
 
      return <option value={color} style={{color}}>{color}  </option>
    })
  
  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input className="toggle" type="checkbox"  onClick={handelClickChangeStatus} defaultChecked={todo.status}/>
          <div className="todo-text">{todo.title}</div>
        </div>
        <div className="segment buttons">
          <select className="colorPicker" style={{colors}}>
            {colorsRadio}
          </select>
          <button className="destroy" onClick={handelRemoveTodo}>
                X
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoListItem;
