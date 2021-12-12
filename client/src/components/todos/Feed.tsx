import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions } from "../../app/rooReducer";
import { Item } from "./Item";

export const Feed: React.FC = () => {

  const todos = useAppSelector(state=>state.todos)
  

  return (
    <div>
      {
      todos?.todos?.length?
      todos.todos?.map((todo:any)=><Item body={todo.content} isComplited={todo.isDone} />)
      :"hello"
}
    </div>
  )
}
