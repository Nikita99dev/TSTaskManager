import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions } from "../../app/rooReducer";
import { Container } from "../styles/Containet";
import { Item } from "./Item";
import { Empty } from 'antd';
import Loader from "../supportingStuff/Loader";


export const Feed: React.FC = () => {

  const todos = useAppSelector(state=>state.todos)

  const user = useAppSelector(state=>state.user)
  
  const dispatch = useAppDispatch()

  function submit(e:any) {
    console.log(e.target.parentElement.id)
    dispatch(actions.changeTodoStatusPending({id:e.target.parentElement.id}))
  }


  useEffect(()=>{
    if(user.userData.userId){
      dispatch(actions.fetchTodosPending(user.userData.userId))  
    }
  }, [user.userData.username])

  return (
    <div>
      {todos.isLoading? <Loader/>:null}
      {
      todos?.todos?.length?
      todos.todos?.map((todo:any)=><Item key={todo.id} body={todo.content}  isComplited={todo.isDone} id={todo.id} submit={submit}/>)
      :<Empty />
}

    </div>
  )
}
