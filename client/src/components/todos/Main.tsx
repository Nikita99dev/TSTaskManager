import React, { useState } from "react";
import { Container } from "../styles/Containet";
import { Input } from "./Input";

export const MainTodos:React.FC = () => {


  const [input, setInput] = useState('')

  const submit = (e:any)=>setInput(e.target.value)

  return (
    <Container>
      <Input input={input} setInput={setInput} submit = {submit}/>
    </Container>
  )
}
