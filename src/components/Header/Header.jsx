import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/reducer/todoFunctional";

function Header() {
  const dispatch = useDispatch();
  const todos=useSelector((state)=>state.todos.todos);
  const [text, setText] = useState("");

  const handelChangeInput = (event) => {
      setText(event.target.value);
    
  };

  const eventSendData=(event)=>{
    if(event.keyCode === 13 && text !== ''){
        dispatch(addTodo(text,todos.length + 1));
        setText('')
    }


  }
  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handelChangeInput}
        onKeyDown={eventSendData}
      />
    </header>
  );
}

export default Header;
