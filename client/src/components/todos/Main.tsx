import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { actions } from "../../app/rooReducer";
import { Container } from "../styles/Containet";
import { Flex } from "../styles/Flex.styled";
import { Feed } from "./Feed";
import { Input } from "./Input";

export const MainTodos: React.FC = () => {
  const [input, setInput] = useState("");

  const submit = (e: any) => setInput(e.target.value);

  const dispatch = useAppDispatch();

  const submit2 = () => {
    dispatch(actions.createTodoPending(input));
  };


  useEffect(()=>{
    console.log(input)
  },[input])
  
  return (
    <Flex>
      <Input
        input={input}
        setInput={setInput}
        submit={submit}
        submit2={submit2}
      />
      <hr />
      <Feed />
    </Flex>
  );
};
