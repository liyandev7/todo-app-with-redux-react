import { ACTION_TYPE } from "../action/type";
import produce from "immer";
import { STATUS_FILTER } from "./filterReducer";
const initState = {
  todos: [{ id: 1, title: "learning React", status: true }],
};

const todoReducer = produce((state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TODO:
      state.todos.push(action.payload.todo);
      break;

    case ACTION_TYPE.TOGGLE_TODO:
      const todoId = action.payload.id - 1;
      state.todos[todoId].status = !state.todos[todoId].status;
      break;
    case ACTION_TYPE.DELETE_TODO:
      delete state.todos[action.payload.id - 1];
      break;

    case ACTION_TYPE.ADD_COLOR_TODO:
      const todoIdColor = action.payload.id - 1;
      state.todos[todoIdColor].color = action.payload.color;
      break;
      case ACTION_TYPE.MARK_COMPLETED_TODOS:
        state.todos.forEach((todo)=>{
           todo.status=true;
        })
        break;
  }
}, initState);





export default todoReducer;
