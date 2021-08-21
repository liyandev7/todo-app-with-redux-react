import { ACTION_TYPE } from "../action/type"
import { STATUS_FILTER } from "./filterReducer"

export const addTodo=(text,id)=>{
    return{
        type:ACTION_TYPE.ADD_TODO,
        payload:{
            todo:{id:id,title:text,status:false}
        }
    }

}

export const changeStatusTodo=(id)=>{
    return{
        type:ACTION_TYPE.TOGGLE_TODO,
        payload:{
            id:id
        }
    }
}

export const removeTodo=(id)=>{
    return{
        type:ACTION_TYPE.DELETE_TODO,
        payload:{
            id:id
        }
    }
}

export const selectTodos=(state)=>{
    return state.todos.todos;
}


const selectFilterTodos=(state)=>{
    const todos=selectTodos(state);
    const {status,colors}=state.filters;

    const showAll=status === STATUS_FILTER.ALL ;

    if(showAll && colors.length === 0){
        return todos;
    }

    const showStatusCompleted=status === STATUS_FILTER.COMPLETED;

    return todos.filter((todo)=>{
        const statusFilter=showStatusCompleted === todo.status;
        const colorsFilter=colors.length === 0 || colors.includes(todo.color);

        return statusFilter && colorsFilter;
    })
}

export const selectTodoIds=(state)=>{
    const filterTodos=selectFilterTodos(state);

    return filterTodos;

}

export const markAllTodosCompleted=()=>{
    return{
        type:ACTION_TYPE.MARK_COMPLETED_TODOS,
    }
}