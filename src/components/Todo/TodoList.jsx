import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { selectTodoIds } from '../../store/reducer/todoFunctional';
import TodoListItem from './TodoListItem'

const TodoList = () => {
  const todos = useSelector(selectTodoIds,shallowEqual);
  const colors = useSelector((state)=>state.filters.colors);


 

  const renderedListItems = todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo}  colors={colors}/>
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
