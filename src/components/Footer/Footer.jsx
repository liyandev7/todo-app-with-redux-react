import React from "react";
import { useDispatch } from "react-redux";
import { markAllTodosCompleted } from "../../store/reducer/todoFunctional";
import CountTodo from "./CountTodo";
import FilterColors from "./FilterColors";
import FilterStatus from "./FilterStatus";

function Footer() {
  const dispatch=useDispatch();
  const markCompletedTodos=()=>{

     dispatch(markAllTodosCompleted());
  }
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={markCompletedTodos}>Mark All Completed</button>
        <button className="button">Clear Completed</button>
      </div>

     <FilterStatus/>
     <FilterColors/>
     <CountTodo/>
    </footer>
  );
}

export default Footer;
