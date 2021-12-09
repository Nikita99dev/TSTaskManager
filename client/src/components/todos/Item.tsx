import React from "react";
import styled from "styled-components";
import { TodosI } from "../../app/types/TodosTypes";
import { Container } from "../styles/Containet";

const StyledTitle = styled.p<ITitle>`
  margin: 0;
  text-decoration: ${(prop)=>(prop.isComplite? 'line-through' : 'none')};
`

interface ITitle{
  isComplite: boolean
}

export const Item: React.FC<TodosI> = ({body, isComplited}) => {
  return (
    <Container>

    </Container>
  )
}
