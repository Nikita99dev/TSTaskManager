import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { TodosI } from "../../app/types/TodosTypes";
import { Container } from "../styles/Containet";

const StyledTitle = styled.p<ITitle>`
  margin: 0;
  text-decoration: ${(prop)=>(prop.isComplited? 'line-through' : 'none')};
`

interface ITitle{
  isComplited: boolean,
}


export const Item: React.FC<TodosI> = ({body, isComplited, submit, id }) => {
 
  const todos = useAppSelector(state=>state.todos)

  return (
    <Container>
      <StyledTitle isComplited={isComplited}>
        {body}
      </StyledTitle>
      <Button id={`${id}`} type="primary" onClick={submit} danger={isComplited?true:false}> {isComplited? "Undone": "Done"} </Button>
    </Container>
  )
}
