import React from "react";
import { useRef } from "react";
const NewTodo: React.FC<{onAddTodo: (text:string)=> void}> = (props) => {
    const todoUseRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event:React.FormEvent) => {
        event.preventDefault()
        const enteredText = todoUseRef.current!.value;
        console.log(enteredText)
        props.onAddTodo(enteredText)
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input ref={todoUseRef} type='text'id="text" placeholder="Enter Todo"></input>
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodo;